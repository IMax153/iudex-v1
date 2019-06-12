import { Interpolation } from 'styled-components';

import { css } from '../../../styles';
import { ANCHORS, Anchors } from '../constants';

interface Params {
  anchor: Anchors;
  containerLeft: number;
  containerWidth: number;
  popoverWidth: number;
}

type ResolvePopoverHorizontal = (params: Params) => Interpolation<any>;

export const resolvePopoverHorizontal: ResolvePopoverHorizontal = ({
  anchor,
  containerLeft,
  containerWidth,
  popoverWidth,
}) => {
  if (anchor === ANCHORS.start) {
    return css`
      left: ${Math.floor(containerLeft)}px;
    `;
  }
  if (anchor === ANCHORS.end) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth - popoverWidth)}px; /* TODO: use token */
    `;
  }
  return null;
};
