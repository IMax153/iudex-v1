import React from 'react';
import { FontAwesomeIcon, Props as FontAwesomeProps } from '@fortawesome/react-fontawesome';

import styled, { Theme } from '../../styles';
import { ICON_COLORS, IconColors, ICON_SIZES, IconSizes } from './constants';

export interface IconProps extends Omit<FontAwesomeProps, 'size'> {
  size?: IconSizes;
  color?: IconColors;
}

interface StyledProps {
  size: IconSizes;
}

export const getWidth = (size: IconSizes) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [ICON_SIZES.mini]: theme.icon.width.mini,
    [ICON_SIZES.small]: theme.icon.width.small,
    [ICON_SIZES.medium]: theme.icon.width.medium,
    [ICON_SIZES.large]: theme.icon.width.large,
  };
  return tokens[size] || tokens[ICON_SIZES.medium];
};

export const getHeight = (size: IconSizes) => ({ theme }: { theme: Theme }) => {
  const tokens = {
    [ICON_SIZES.mini]: theme.icon.height.mini,
    [ICON_SIZES.small]: theme.icon.height.small,
    [ICON_SIZES.medium]: theme.icon.height.medium,
    [ICON_SIZES.large]: theme.icon.height.large,
  };
  return tokens[size] || tokens[ICON_SIZES.medium];
};

const getColor = () => ({ theme, color = 'info' }: { theme: Theme; color?: IconColors }) => {
  const tokens = {
    [ICON_COLORS.primary]: theme.icon.colors.primary,
    [ICON_COLORS.secondary]: theme.icon.colors.secondary,
    [ICON_COLORS.tertiary]: theme.icon.colors.tertiary,
    [ICON_COLORS.info]: theme.icon.colors.info,
    [ICON_COLORS.attention]: theme.icon.colors.attention,
    [ICON_COLORS.success]: theme.icon.colors.success,
    [ICON_COLORS.warning]: theme.icon.colors.warning,
    [ICON_COLORS.critical]: theme.icon.colors.critical,
    [ICON_COLORS.brand]: theme.icon.colors.brand,
    [ICON_COLORS.white]: theme.icon.colors.white,
  };
  return tokens[color];
};

const BaseIcon: React.FC<IconProps> = ({ size, ...props }) => {
  return <FontAwesomeIcon size="10x" {...props} />;
};

export const IconContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > svg {
    width: ${({ size }) => getWidth(size)}!important;
    height: ${({ size }) => getHeight(size)};
    flex-shrink: 0;
    vertical-align: middle;
    fill: currentColor;
    color: ${getColor()};
  }
`;

export const Icon: React.FC<IconProps> = ({ size = 'small', color = 'white', ...props }) => (
  <IconContainer size={size} color={color} {...props}>
    <BaseIcon size={size} color={color} {...props} />
  </IconContainer>
);
