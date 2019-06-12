import React, { PropsWithChildren } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { Queries } from '../../../styles/theme/utils/media/constants';
import { css } from '../../../styles';
import { Props } from '../index';
import { getDisplay } from './getDisplay';
import { getViewportIEGridStyles } from './getViewportIEGridStyles';

export type GetViewportGridStyles = ({
  viewport,
  index,
  devices,
}: {
  viewport: Queries & 'smallMobile';
  index: number;
  devices: Queries[];
}) => (props: PropsWithChildren<Props>) => FlattenSimpleInterpolation | boolean;

/*
  We need to get gap, rowGap and columnGap recursively because someone can change row or columns
  in some mediaQuery, so we need to render IE compatible format once again and we need to know to gaps
  Also we want to render only own gaps into CSS
 */
export const getViewportGridStyles: GetViewportGridStyles = ({
  viewport,
  index,
  devices,
}) => props => {
  if (props[viewport]) {
    const { inline, maxWidth, gap, columnGap, rowGap, rows, columns, centerContent } = props[
      viewport
    ];

    const compatibleIE = getViewportIEGridStyles(
      React.Children.count(props.children),
      { index, devices },
      props,
    ) as FlattenSimpleInterpolation;

    return css`
      ${getDisplay(inline, viewport === 'smallMobile')};
      max-width: ${maxWidth};
      grid-template-columns: ${columns};
      grid-template-rows: ${rows};
      grid-column-gap: ${columnGap};
      grid-row-gap: ${rowGap};
      grid-gap: ${gap};
      ${compatibleIE};

      ${centerContent &&
        css`
          align-items: center;
          justify-items: center;
        `}
    `;
  }

  return false;
};
