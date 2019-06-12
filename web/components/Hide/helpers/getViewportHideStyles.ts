import { FlattenSimpleInterpolation } from 'styled-components';

import { css } from '../../../styles';
import { media } from '../../../styles/theme/utils/media';
import { DEVICES, Devices, Queries } from '../../../styles/theme/utils/media/constants';

type GetViewportHideStyles = (
  on: Devices,
  resolveDisplayProp?: () => (args?: any) => string,
) => FlattenSimpleInterpolation;

export const getViewportHideStyles: GetViewportHideStyles = (
  on,
  resolveDisplayProp = () => () => 'block',
) =>
  DEVICES.map(viewport =>
    viewport in media
      ? css`
          ${viewport !== 'smallMobile' &&
            media[viewport](css`
              display: ${on.indexOf(viewport) !== -1 ? 'none' : resolveDisplayProp()};
            `)};
        `
      : // "smallMobile" is not media query so we need to check it explicitly
        viewport === 'smallMobile' &&
        on.indexOf(viewport) !== -1 &&
        css`
          display: none;
        `,
  );
