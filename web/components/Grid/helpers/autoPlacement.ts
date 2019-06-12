import { FlattenSimpleInterpolation } from 'styled-components';

import { css } from '../../../styles';
import { applyGap } from './applyGap';
import { calculateColumnPlacement } from './calculateColumnPlacement';
import { calculateRowPlacement } from './calculateRowPlacement';
import { lengthOf } from './lengthOf';
import { realCellsCount } from './realCellsCount';

type AutoPlacement = (
  childrenCount: number,
  columns: string,
  rows: string,
  columnGap?: string | null,
  rowGap?: string | null
) => FlattenSimpleInterpolation;

/*
  This functions is applying a proper -ms-grid-column and -ms-grid-row
  as IE10+ can't resolve auto placement by itself natively
 */
export const autoPlacement: AutoPlacement = (childrenCount, columns, rows, columnGap, rowGap) => {
  const columnsCount = realCellsCount(Boolean(columnGap), lengthOf(columns));
  const rowsCount = realCellsCount(Boolean(rowGap), lengthOf(rows));

  return Array(...Array(childrenCount)).map((_, i) => {
    const index = i + 1;
    const columnIndex = calculateColumnPlacement(index, columnsCount);
    const rowIndex = calculateRowPlacement(index, columnsCount, rowsCount);

    return css`
      & > *:nth-child(${index}) {
        -ms-grid-column: ${applyGap(columnIndex, Boolean(columnGap))};
        -ms-grid-row: ${applyGap(rowIndex, Boolean(rowGap))};
      }
    `;
  });
};
