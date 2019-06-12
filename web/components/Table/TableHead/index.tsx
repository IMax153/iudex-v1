import React from 'react';

import styled from '../../../styles';
import { StyledTableCell } from '../TableCell';

interface Props {}

const StyledTableHead = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.table.border.colors.tableHead};
  width: 100%;
  white-space: nowrap;

  ${StyledTableCell} {
    font-weight: ${({ theme }) => theme.table.fontWeight.tableHead};
  }
`;

export const TableHead: React.FC<Props> = ({ children }) => {
  return <StyledTableHead>{children}</StyledTableHead>;
};
