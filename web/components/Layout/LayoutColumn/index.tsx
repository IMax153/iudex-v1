import React from 'react';

import styled from '../../../styles';
import { Devices } from '../../../styles/theme/utils/media/constants';
import { getViewportHideStyles } from '../../Hide/helpers';

interface Props {
  hideOn?: Devices;
}

interface InternalProps {
  hideOn: Devices;
}

type StyledColumnProps = Pick<InternalProps, 'hideOn'>;

const StyledColumn = styled.div<StyledColumnProps>`
  ${({ hideOn }) => Boolean(hideOn) && getViewportHideStyles(hideOn)};
`;

export const LayoutColumn: React.FC<Props> = ({ children, hideOn = [] }) => {
  return <StyledColumn hideOn={hideOn}>{children}</StyledColumn>;
};
