import React from 'react';

import styled from '../../../styles';
import { ALIGN_OPTIONS, AlignOptions } from './constants';

interface Props {
  align?: AlignOptions;
  bolded?: boolean;
}

export const StyledTableCell = styled.td<Props>`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.base.font.family};
  font-size: ${({ theme }) => theme.text.fontSize.md};
  color: ${({ theme }) => theme.table.colors.text};
  text-align: ${({ align }) => align};
  font-weight: ${({ bolded }) => bolded && 'bold'};
`;

export const TableCell: React.FC<Props> = ({
  children,
  align = ALIGN_OPTIONS.center as AlignOptions,
  bolded,
}) => {
  return (
    <StyledTableCell align={align} bolded={bolded}>
      {children}
    </StyledTableCell>
  );
};
