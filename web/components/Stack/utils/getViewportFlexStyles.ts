import { getIn } from 'formik';

import { css } from '../../../styles';
import { Props, Viewport, MediaQuery } from '../types';
import { getJustify } from './getJustify';
import { getDirection } from './getDirection';
import { getWidth } from './getWidth';
import { getDisplay } from './getDisplay';
import { getShrink } from './getShrink';
import { getWrap } from './getWrap';
import { getGrow } from './getGrow';
import { getAlign } from './getAlign';

export const getViewportFlexStyles = (viewport: Viewport) => (props: Props) => {
  const { flex } = props;

  const { inline, direction, wrap, grow, shrink, basis, justify, align, spaceAfter } = getIn(
    props,
    viewport,
  ) as MediaQuery & Pick<Props, 'spaceAfter'>;

  return css`
    ${flex &&
      css`
        display: ${getDisplay(inline)};
        flex-direction: ${getDirection(direction)};
        flex-wrap: ${getWrap(wrap)};
        flex-grow: ${getGrow(grow)};
        flex-shrink: ${getShrink(shrink)};
        flex-basis: ${basis};
        justify-content: ${getJustify(justify)};
        align-content: ${getAlign(align)};
        align-items: ${getAlign(align)};
      `};
    width: ${getWidth(inline)};
    margin-bottom: ${({ theme }) => theme.utils.spaceAfter(spaceAfter || 'none')};
  `;
};
