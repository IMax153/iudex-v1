import { FlattenSimpleInterpolation } from 'styled-components';

import { Queries } from '../../../styles/theme/utils/media/constants';
import { css } from '../../../styles';
import { Props } from '../index';
import { autoPlacement } from './autoPlacement';
import { getProperty } from './getProperty';
import { compatibleGridTemplate } from './compatibleGridTemplate';

export type GetViewportIEGridStyles = (
  childrenCount: number,
  { index, devices }: { index: number; devices: Queries[] },
  props: Props,
) => FlattenSimpleInterpolation | boolean;

const chooseGap = (specificGap?: string, basicGap?: string) =>
  specificGap && specificGap !== '0' ? specificGap : basicGap;

export const getViewportIEGridStyles: GetViewportIEGridStyles = (
  childrenCount,
  { index, devices },
  props,
) => {
  const rows = getProperty('rows', { index, devices }, props);
  const columns = getProperty('columns', { index, devices }, props);
  const gap = getProperty('gap', { index, devices }, props);
  const rowGap = chooseGap(getProperty('rowGap', { index, devices }, props), gap);
  const columnGap = chooseGap(getProperty('columnGap', { index, devices }, props), gap);
  const compatibleColumns = compatibleGridTemplate(columns || '', columnGap);
  const compatibleRows = compatibleGridTemplate(rows || '', rowGap);
  const childrenPlacement = autoPlacement(
    childrenCount,
    compatibleColumns || '',
    compatibleRows || '',
    columnGap,
    rowGap,
  );

  return css`
    -ms-grid-columns: ${compatibleColumns};
    -ms-grid-rows: ${compatibleRows};
    ${childrenPlacement};
  `;
};
