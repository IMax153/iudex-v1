import React from 'react';

import { Countdown, IconWrapper } from './styles';
import { appearances, AppearanceTypes } from '.';

interface ToastIconProps {
  appearance: AppearanceTypes;
  autoDismiss: boolean | number;
  autoDismissTimeout: number;
}

export const ToastIcon: React.FC<ToastIconProps> = ({
  appearance,
  autoDismiss,
  autoDismissTimeout,
}) => {
  const meta = appearances[appearance];
  const Glyph = meta.icon;

  return (
    <IconWrapper background={meta.fg} color={meta.text}>
      <Countdown opacity={autoDismiss ? 1 : 0} autoDismissTimeout={autoDismissTimeout} />
      <Glyph />
    </IconWrapper>
  );
};
