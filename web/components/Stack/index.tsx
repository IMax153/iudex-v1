import React from 'react';

import styled, { css } from '../../styles';
import { DEVICES, Devices } from '../../styles/theme/utils/media/constants';
import { ALIGNS, JUSTIFY, DIRECTIONS, SPACINGS } from './constants';
import { Props, MediaQuery, Viewport } from './types';
import { isDefined } from './utils/isDefined';
import { shouldUseFlex } from './utils/shouldUseFlex';
import { getViewportFlexStyles } from './utils/getViewportFlexStyles';
import { getChildrenMargin } from './utils/getChildrenMargin';

const StyledStack = styled.div<Props>`
  ${props =>
    DEVICES.map((viewport: Viewport, index: number, devices: Devices) =>
      viewport in props.theme.utils.media
        ? //
          // @ts-ignore
          props.theme.utils.media[viewport](css`
            ${isDefined(props[viewport]) && getViewportFlexStyles(viewport)};
            ${getChildrenMargin({ viewport, index, devices })}
          `)
        : viewport === 'smallMobile' &&
          css`
            ${getViewportFlexStyles(viewport)};
            ${getChildrenMargin({ viewport, index, devices })}
          `,
    )};
`;

export const Stack: React.FC<Props> = props => {
  const {
    inline = false,
    spacing = SPACINGS.natural,
    align = ALIGNS.start,
    justify = JUSTIFY.start,
    grow = true,
    wrap = false,
    shrink = false,
    basis,
    spaceAfter,
    children,
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
  } = props;
  // turn on FLEX automatically or manually with prop flex
  const flex = shouldUseFlex(props);

  // when flex - use direction, otherwise column because it's block element
  const direction = props.direction || (flex ? DIRECTIONS.row : DIRECTIONS.column);

  const smallMobile = {
    direction,
    align,
    justify,
    wrap,
    grow,
    basis,
    inline,
    shrink,
    spacing,
    spaceAfter,
  } as MediaQuery;

  return (
    <StyledStack
      flex={flex}
      smallMobile={smallMobile}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      {children}
    </StyledStack>
  );
};
