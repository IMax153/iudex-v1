import React from 'react';

import styled from '../../../styles';

interface Props {}

export const StyledTableRow = styled.tr`
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
`;

export const TableRow: React.FC<Props> = ({ children }) => (
  <StyledTableRow>{children}</StyledTableRow>
);
