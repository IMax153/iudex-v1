import styled, { css, keyframes } from 'styled-components';

import { Placement, TransitionState } from '.';

interface CountdownProps {
  autoDismissTimeout: number;
  opacity: number;
}

interface IconWrapperProps {
  background: string;
  color: string;
}

interface ToastWrapperProps {
  background: string;
  color: string;
  placement: Placement;
  transform: string;
  transitionDuration: number;
  transitionState: TransitionState;
}

export const shrink = keyframes`from { height: 100%; } to { height: 0% }`;

export const A11yText = styled.span`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  border: 0;
  white-space: nowrap;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8px 12px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 150ms;

  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.p`
  display: flex;
  align-items: center;
  flex-grow: 1;
  min-height: 50px;
  margin: 0 0 4px 0;
  padding: 8px 12px;
  font-size: 1rem;
  line-height: 1.4;
`;

export const Countdown = styled.div<CountdownProps>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  opacity: ${({ opacity }) => opacity};
  animation: ${shrink} ${({ autoDismissTimeout }) => autoDismissTimeout}ms linear;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 30px;
  padding: 8px 0;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow: hidden;
`;

export const Svg = styled.svg`
  display: inline-block;
  position: relative;
  height: auto;
  width: 100%;
  padding: 6px;
  margin-bottom: 2px;
  fill: currentColor;
  z-index: 1;
`;

export const ToastWrapper = styled.div<ToastWrapperProps>`
  display: flex;
  width: 360px;
  margin-bottom: 8px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.175);
  transition: ${({ transitionDuration }) =>
    css`transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1)`};
  transform: ${({ transform }) => transform};
`;
