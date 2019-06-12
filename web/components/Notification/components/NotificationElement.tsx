import React from 'react';

import styled, { css } from '../../../styles';
import { Icon } from '../../Icon';
import { Appearance, Placement, TransitionState, HoverFn } from '../types';
import { getAppearance, getTransform } from '../helpers';
import { NotificationCountdown } from './NotificationCountdown';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface Props {
  appearance?: Appearance;
  transitionState?: TransitionState; // inherited from ToastProvider
  autoDismiss?: boolean | number;
  autoDismissTimeout: number; // inherited from ToastProvider
  pauseOnHover?: boolean;
  isRunning?: boolean;
  placement?: Placement;
  transitionDuration: number; // inherited from ToastProvider
  onDismiss: () => any;
  onMouseEnter?: HoverFn;
  onMouseLeave?: HoverFn;
}

interface NotificationElementProps {
  appearance: Appearance;
  placement: Placement;
  transitionState: TransitionState;
  transitionDuration: number;
}

const StyledNotificationElement = styled.div<NotificationElementProps>`
  display: flex;
  width: 360px;
  background: ${({ theme, appearance }) => getAppearance(theme, appearance).bg};
  color: ${({ theme, appearance }) => getAppearance(theme, appearance).text};
  border-radius: ${({ theme }) => theme.base.borderRadius};
  margin-bottom: ${({ theme }) => theme.base.spacing.xs};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.175);
  transition: ${({ transitionDuration }) =>
    css`transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1)`};
  ${({ transitionState, placement }) => getTransform(transitionState, placement)};
`;

const NotificationContent = styled.div`
  min-height: 40px;
  padding: ${({ theme }) =>
    css`
      ${theme.base.spacing.xs} ${Number(theme.base.spacing.xs.replace('px', '')) * 1.5}px
    `};
  flex-grow: 1;
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${({ theme }) => theme.text.fontSize.lg};
  line-height: ${({ theme }) => theme.text.lineHeight};
`;

const CloseNotificationButton = styled.div<ButtonProps>`
  flex-shrink: 0;
  padding: ${({ theme }) =>
    css`
      ${theme.base.spacing.xs} ${Number(theme.base.spacing.xs.replace('px', '')) * 1.5}px
    `};
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 150ms;
  -webkit-appearance: none;

  &:hover {
    opacity: 1;
  }
`;

export const NotificationElement: React.FC<Props> = ({
  appearance = 'info',
  autoDismiss,
  autoDismissTimeout,
  children,
  isRunning = true,
  onDismiss,
  placement = 'bottom-right',
  transitionDuration,
  transitionState = 'unmounted',
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <StyledNotificationElement
      appearance={appearance}
      placement={placement}
      transitionState={transitionState}
      transitionDuration={transitionDuration}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NotificationCountdown
        appearance={appearance}
        autoDismiss={autoDismiss}
        autoDismissTimeout={autoDismissTimeout}
        isRunning={isRunning}
      />
      <NotificationContent>{children}</NotificationContent>
      {onDismiss ? (
        <CloseNotificationButton type="button" onClick={() => onDismiss()}>
          <Icon icon="times" size="small" color={appearance === 'info' ? 'white' : 'secondary'} />
        </CloseNotificationButton>
      ) : null}
    </StyledNotificationElement>
  );
};
