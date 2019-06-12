import React from 'react';

import styled from '../../styles';
import { Devices } from '../../styles/theme/utils/media/constants';
import { getDisplay, getViewportHideStyles } from './helpers';

export interface Props {
  on: Devices;
  block?: boolean;
}

const StyledHide = styled.span<Props>`
  ${({ on }) => getViewportHideStyles(on, getDisplay)}
`;

export const Hide: React.FC<Props> = ({ children, on = [], block }) => {
  return (
    <StyledHide on={on} block={block}>
      {children}
    </StyledHide>
  );
};
