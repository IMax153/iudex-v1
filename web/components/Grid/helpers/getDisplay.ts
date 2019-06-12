import { FlattenSimpleInterpolation } from 'styled-components';

import { css } from '../../../styles';
import { isDefined } from '../../Stack/utils/isDefined';

type GetDisplay = (inline: boolean, force: boolean) => FlattenSimpleInterpolation;

export const getDisplay: GetDisplay = (inline, force) =>
  css`
    display: ${(isDefined(inline) || force) && (inline ? 'inline-grid' : 'grid')};
    display: ${(isDefined(inline) || force) && (inline ? '-ms-inline-grid' : '-ms-grid')};
  `;
