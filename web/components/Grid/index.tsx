import React from 'react';

import styled, { css } from '../../styles';
import { DEVICES, Devices } from '../../styles/theme/utils/media/constants';
import { isDefined } from '../Stack/utils/isDefined';
import { getViewportGridStyles } from './helpers/getViewportGridStyles';

export type Viewport =
  | 'smallMobile'
  | 'mediumMobile'
  | 'largeMobile'
  | 'tablet'
  | 'desktop'
  | 'largeDesktop';

export interface MediaQuery {
  inline?: boolean;
  rows?: string;
  columns?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  maxWidth?: string;
}

export interface Props extends MediaQuery {
  element?: string;
  className?: string;
  smallMobile?: MediaQuery;
  mediumMobile?: MediaQuery;
  largeMobile?: MediaQuery;
  tablet?: MediaQuery;
  desktop?: MediaQuery;
  largeDesktop?: MediaQuery;
  centerContent?: boolean;
}

const StyledGridComponent: React.FC<Props> = ({
  element: Element = 'div',
  className,
  children,
}) => (
  // @ts-ignore
  <Element className={className}>{children}</Element>
);

const StyledGrid = styled(StyledGridComponent)`
  height: 100%;

  ${props =>
    DEVICES.map((viewport: any, index: number, devices: Devices) =>
      viewport in props.theme.utils.media
        ? //
          // @ts-ignore
          props.theme.utils.media[viewport](css`
            // @ts-ignore
            ${isDefined(props[viewport]) && getViewportGridStyles({ viewport, index, devices })};
          `)
        : viewport === 'smallMobile' &&
          css`
            // @ts-ignore
            ${getViewportGridStyles({ viewport, index, devices })};
          `,
    )};
`;

export const Grid: React.FC<Props> = ({
  inline,
  rows = '1fr',
  columns = '1fr',
  gap,
  rowGap,
  columnGap,
  maxWidth,
  children,
  element = 'div',
  centerContent = false,
  ...props
}) => {
  const smallMobile = { inline, rows, columns, gap, rowGap, columnGap, maxWidth, centerContent };

  return (
    <StyledGrid smallMobile={smallMobile} element={element} {...props}>
      {children}
    </StyledGrid>
  );
};
