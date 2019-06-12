import React from 'react';

import styled from '../../../styles';

interface Props {}

export const StyledTableBody = styled.tbody`
  width: 100%;
  white-space: nowrap;
  border-left: 1px solid ${({ theme }) => theme.table.border.colors.table};
  border-right: 1px solid ${({ theme }) => theme.table.border.colors.table};
  border-bottom: 1px solid ${({ theme }) => theme.table.border.colors.table};
`;

export const TableBody: React.FC<Props> = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};
