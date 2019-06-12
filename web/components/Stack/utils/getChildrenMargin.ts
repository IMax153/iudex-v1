import { Interpolation } from 'styled-components';

import { css } from '../../../styles';
import { QUERIES, DevicesList } from '../../../styles/theme/utils/media/constants';
import { SPACINGS, DirectionKeys } from '../constants';
import { Props, Viewport } from '../types';
import { getDesktopSpacing } from './getDesktopSpacing';
import { isMobileViewport } from './isMobileViewport';
import { getMobileSpacing } from './getMobileSpacing';
import { getProperty } from './getProperty';
import { getDirectionSpacingTemplate } from './getDirectionSpacingTemplate';

export type GetChildrenMargin = ({
  viewport,
  index,
  devices,
}: {
  viewport: Viewport;
  index: number;
  devices: DevicesList;
}) => (obj: Props) => Interpolation<Props>;

export const getChildrenMargin: GetChildrenMargin = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === QUERIES.desktop) {
    const spacing = getProperty('spacing', { index, devices }, props);

    if (spacing === SPACINGS.none) return false;

    const isMobile = isMobileViewport(viewport);
    const spacingTokens = isMobile ? getMobileSpacing() : getDesktopSpacing();
    const direction = getProperty('direction', { index, devices }, props);

    const margin =
      spacing &&
      direction &&
      String(getDirectionSpacingTemplate(direction as DirectionKeys)).replace(
        '__spacing__',
        spacingTokens[spacing]
      );

    return css`
      & > * {
        ${margin && `margin: ${margin} !important`};
        ${isMobile &&
          css`
            &:last-child {
              margin: 0 !important;
            }
          `};
      }
    `;
  }
  return false;
};
