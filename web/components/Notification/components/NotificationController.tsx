import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { Timer } from '../helpers';
import { Props, NotificationElement } from './NotificationElement';

export const NotificationController: React.FC<Props> = props => {
  const { autoDismiss, autoDismissTimeout, pauseOnHover, onDismiss } = props;

  const [isRunning, setRunning] = useState(Boolean(autoDismiss));

  const timer = useRef<Timer | null>(null);

  useEffect(() => {
    if (!autoDismiss) return;

    setRunning(true);
    timer.current = new Timer(onDismiss, autoDismissTimeout);

    return () => {
      if (!autoDismiss) return;
      if (timer.current) timer.current.clear();
    };
  }, [autoDismiss, autoDismissTimeout, onDismiss]);

  const onMouseEnter = useCallback(() => {
    setRunning(false);
    if (timer.current) timer.current.pause();
  }, []);

  const onMouseLeave = useCallback(() => {
    setRunning(true);
    if (timer.current) timer.current.resume();
  }, []);

  const hasMouseEvents = Boolean(pauseOnHover && autoDismiss);
  const handleMouseEnter = hasMouseEvents ? onMouseEnter : undefined;
  const handleMouseLeave = hasMouseEvents ? onMouseLeave : undefined;

  return (
    <Transition appear mountOnEnter unmountOnExit timeout={props.transitionDuration} {...props}>
      {transitionState => {
        return (
          <NotificationElement
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            autoDismissTimeout={autoDismissTimeout}
            isRunning={isRunning}
            transitionState={transitionState}
            {...props}
          />
        );
      }}
    </Transition>
  );
};
