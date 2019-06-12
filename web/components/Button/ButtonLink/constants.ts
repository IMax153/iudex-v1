import { $Keys } from '../../../lib/ts';

export const TYPE_OPTIONS = {
  primary: 'primary',
  secondary: 'secondary',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;

export const SIZE_OPTIONS = {
  small: 'small',
  normal: 'normal',
  large: 'large',
};

export type SizeOptions = $Keys<typeof SIZE_OPTIONS>;

export const TOKENS = {
  backgroundButton: 'backgroundButton',
  backgroundButtonHover: 'backgroundButtonHover',
  backgroundButtonActive: 'backgroundButtonActive',
  colorTextButton: 'colorTextButton',
  colorTextButtonHover: 'colorTextButtonHover',
  colorTextButtonActive: 'colorTextButtonActive',
  heightButton: 'heightButton',
  fontSizeButton: 'fontSizeButton',
  paddingButton: 'paddingButton',
  paddingButtonWithIcons: 'paddingButtonWithIcons',
  paddingButtonWithLeftIcon: 'paddingButtonWithLeftIcon',
  paddingButtonWithRightIcon: 'paddingButtonWithRightIcon',
  marginRightIcon: 'marginRightIcon',
};

export type Tokens = $Keys<typeof TOKENS>;
