import React from 'react';

import * as colors from './colors';
import { CheckIcon, FlameIcon, InfoIcon, CloseIcon, AlertIcon } from './icons';
import { A11yText, Button, Content, ToastWrapper } from './styles';
import { ToastIcon } from './ToastIcon';

export type AppearanceTypes = 'success' | 'error' | 'warning' | 'info';

export type Placement =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right';

export interface ToastProps {
  appearance: AppearanceTypes;
  autoDismiss: boolean | number;
  autoDismissTimeout: number; // inherited from ToastProvider
  children: Node;
  onDismiss: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  placement: Placement;
  transitionDuration: number; // inherited from ToastProvider
  transitionState: TransitionState; // inherited from ToastProvider
}

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';

export const appearances = {
  success: {
    icon: CheckIcon,
    text: colors.G500,
    fg: colors.G300,
    bg: colors.G50,
  },
  error: {
    icon: FlameIcon,
    text: colors.R500,
    fg: colors.R300,
    bg: colors.R50,
  },
  warning: {
    icon: AlertIcon,
    text: colors.Y500,
    fg: colors.Y300,
    bg: colors.Y50,
  },
  info: {
    icon: InfoIcon,
    text: colors.N400,
    fg: colors.B200,
    bg: 'white',
  },
};

function getTranslate(placement: Placement) {
  const pos = placement.split('-');
  const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  const translateMap: { [key: string]: string } = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)',
  };

  return translateMap[relevantPlacement];
}

const toastStates = (placement: Placement) => ({
  entering: getTranslate(placement),
  entered: 'translate3d(0,0,0)',
  exiting: getTranslate(placement),
  exited: getTranslate(placement),
});

export const Toast: React.FC<ToastProps> = ({
  appearance = 'success',
  autoDismiss,
  autoDismissTimeout,
  children,
  onDismiss,
  placement,
  transitionDuration,
  transitionState,
}) => {
  console.log({
    appearance,
    autoDismiss,
    autoDismissTimeout,
    children,
    onDismiss,
    placement,
    transitionDuration,
    transitionState,
  });

  return (
    <ToastWrapper
      background={appearances[appearance].bg}
      color={appearances[appearance].text}
      placement={placement}
      transform={toastStates(placement)[transitionState]}
      transitionState={transitionState}
      transitionDuration={transitionDuration}
    >
      <ToastIcon
        appearance={appearance}
        autoDismiss={autoDismiss}
        autoDismissTimeout={autoDismissTimeout}
      />

      <Content>{children}</Content>

      {onDismiss ? (
        <Button onClick={onDismiss} role="button">
          <CloseIcon />
          <A11yText>Close</A11yText>
        </Button>
      ) : null}
    </ToastWrapper>
  );
};
