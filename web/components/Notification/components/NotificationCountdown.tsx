import React from 'react';

import styled, { css, keyframes } from '../../../styles';
import { Appearance } from '../types';
import { getAppearance, getIcon } from '../helpers';

interface Props {
  appearance: Appearance;
  autoDismiss?: boolean | number;
  autoDismissTimeout: number;
}

interface IconProps extends Props {
  isRunning: boolean;
}

interface CountdownProps extends IconProps {
  opacity: number;
}

export const shrink = keyframes`from { height: 100%; } to { height: 0% }`;

const Countdown = styled.div<CountdownProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0px;
  background: rgba(0, 0, 0, 0.1);
  animation: ${({ autoDismissTimeout }) =>
    css`
      ${shrink} ${autoDismissTimeout}ms linear
    `};
  animation-play-state: ${({ isRunning }) => (isRunning ? 'running' : 'paused')};
  opacity: ${({ opacity }) => opacity};
`;

const CountdownContainer = styled.div<Props>`
  position: relative;
  flex-shrink: 0;
  width: 30px;
  padding-top: ${({ theme }) => theme.base.spacing.xs};
  padding-bottom: ${({ theme }) => theme.base.spacing.xs};
  background: ${({ theme, appearance }) => getAppearance(theme, appearance).fg};
  color: ${({ theme, appearance }) => getAppearance(theme, appearance).bg};
  text-align: center;
  border-top-left-radius: ${({ theme }) => theme.base.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.base.borderRadius};
  overflow: hidden;
`;

export const NotificationCountdown: React.FC<IconProps> = ({
  appearance,
  autoDismiss,
  autoDismissTimeout,
  isRunning,
}) => {
  return (
    <CountdownContainer appearance={appearance} autoDismissTimeout={autoDismissTimeout}>
      <Countdown
        appearance={appearance}
        opacity={autoDismiss ? 1 : 0}
        autoDismissTimeout={autoDismissTimeout}
        isRunning={isRunning}
      />
      {getIcon(appearance)}
    </CountdownContainer>
  );
};
