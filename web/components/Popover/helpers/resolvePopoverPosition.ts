import { Interpolation } from 'styled-components';

import { css } from '../../../styles';
import { POSITIONS, Positions, POPOVER_SPACE_BETWEEN } from '../constants';

interface Params {
  position: Positions;
  containerTop: number;
  containerHeight: number;
  popoverHeight: number;
}

type ResolvePopoverPosition = (params: Params) => Interpolation<any>;

export const resolvePopoverPosition: ResolvePopoverPosition = ({
  position,
  containerTop,
  containerHeight,
  popoverHeight,
}) => {
  if (position === POSITIONS.top) {
    return css`
      top: ${Math.floor(
        containerTop + window.scrollY - popoverHeight - POPOVER_SPACE_BETWEEN,
      )}px; /* TODO: use token */
    `;
  }
  if (position === POSITIONS.bottom) {
    return css`
      top: ${Math.floor(
        containerTop + window.scrollY + containerHeight + POPOVER_SPACE_BETWEEN,
      )}px; /* TODO: use token */
    `;
  }
  return null;
};
