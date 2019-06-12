import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import styled, { css } from '../../../styles';
import { Placement } from '../types';
import { PLACEMENT_OPTIONS } from '../constants';

interface Props {
  children?: React.ReactNode;
  placement: Placement;
}

function getPlacement({ placement }: { placement: Placement }) {
  const { top, right, bottom, left, transform } = PLACEMENT_OPTIONS[placement];
  return css`
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    transform: ${transform};
  `;
}

const StyledNotificationContainer = styled.div<Props>`
  position: absolute;
  box-sizing: border-box;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: ${({ theme }) => theme.base.spacing.xs};
  ${getPlacement}
`;

export const NotificationContainer: React.FC<Props> = ({ children, placement }) => (
  <StyledNotificationContainer placement={placement}>
    <TransitionGroup component={null}>{children}</TransitionGroup>
  </StyledNotificationContainer>
);
