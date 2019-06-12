import React, { useReducer } from 'react';
import { createPortal } from 'react-dom';
import cuid from 'cuid';

import { isBrowser } from '../../../lib/browser/isBrowser';
import { NOOP } from '../constants';
import {
  Placement,
  NotificationAction,
  NotificationState,
  NotificationOptions,
  NotificationCallback,
} from '../types';
import { NotificationContainer } from '../components/NotificationContainer';
import { NotificationController } from '../components/NotificationController';
import { Provider } from '.';

interface Props {
  autoDismissTimeout: number;
  placement: Placement;
  transitionDuration: number;
}

const initialState: NotificationState = { notifications: [] };

function notificationReducer(state: NotificationState, action: NotificationAction) {
  switch (action.type) {
    case 'ADD':
      return { notifications: [...state.notifications, action.payload] };
    case 'REMOVE':
      return { notifications: state.notifications.filter(n => n.id !== action.payload.id) };
    default:
      return state;
  }
}

export const NotificationProvider: React.FC<Props> = props => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const add = (content: React.ReactNode, options?: NotificationOptions) => {
    const id = cuid();
    const notification = Object.assign({}, { id, content }, options);
    dispatch({ type: 'ADD', payload: notification });
    if (options && options.onDismiss) options.onDismiss(id);
  };

  const remove = (id: string, cb: NotificationCallback = NOOP) => {
    cb(id);
    dispatch({ type: 'REMOVE', payload: { id } });
  };

  const onDismissNotification = (id: string, cb: NotificationCallback = NOOP) => () => {
    cb(id);
    remove(id);
  };

  return (
    <Provider value={{ add, remove, notifications: state.notifications }}>
      {props.children}

      {isBrowser ? (
        createPortal(
          <NotificationContainer {...props}>
            {state.notifications.map(({ id, content, onDismiss, ...rest }) => (
              <NotificationController
                key={id}
                onDismiss={onDismissNotification(id, onDismiss)}
                {...props}
                {...rest}
              >
                {content}
              </NotificationController>
            ))}
          </NotificationContainer>,
          document.body
        )
      ) : (
        <NotificationContainer {...props}>
          <NotificationController {...props as any} />
        </NotificationContainer>
      )}
    </Provider>
  );
};
