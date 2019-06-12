import React from 'react';

import styled from '../../styles';
import { SpacingsType } from '../../styles/theme/utils/spaceAfter';

interface Props {
  spaceAfter?: SpacingsType;
}

const StyledSeparator = styled.hr<Props>`
  width: 100%;
  height: ${({ theme }) => theme.separator.height};
  background: ${({ theme }) => theme.separator.background};
  box-sizing: border-box;
  border-style: none;
  margin-top: 0;
  margin-bottom: ${({ theme, spaceAfter }) => theme.utils.spaceAfter(spaceAfter)};
`;

export const Separator: React.FC<Props> = ({ spaceAfter = 'none' }) => (
  <StyledSeparator spaceAfter={spaceAfter} />
);
