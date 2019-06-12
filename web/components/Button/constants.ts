import { $Keys } from '../../lib/ts';

export const TYPE_OPTIONS = {
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  critical: 'critical',
  white: 'white',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;

export const SIZE_OPTIONS = {
  mini: 'mini',
  small: 'small',
  normal: 'normal',
  large: 'large',
};

export type SizeOptions = $Keys<typeof SIZE_OPTIONS>;

export const TOKENS = {
  // Size tokens
  heightButton: 'heightButton',
  loadingWidth: 'loadingWidth',
  loadingHeight: 'loadingHeight',
  fontSizeButton: 'fontSizeButton',
  paddingButton: 'paddingButton',
  paddingButtonWithIcons: 'paddingButtonWithIcons',
  paddingButtonWithLeftIcon: 'paddingButtonWithLeftIcon',
  paddingButtonWithRightIcon: 'paddingButtonWithRightIcon',
  marginRightIcon: 'marginRightIcon',
  // Type tokens
  backgroundButton: 'backgroundButton',
  backgroundButtonHover: 'backgroundButtonHover',
  backgroundButtonActive: 'backgroundButtonActive',
  backgroundButtonBordered: 'backgroundButtonBordered',
  backgroundButtonBorderedHover: 'backgroundButtonBorderedHover',
  backgroundButtonBorderedActive: 'backgroundButtonBorderedActive',
  colorTextButton: 'colorTextButton',
  colorTextButtonBordered: 'colorTextButtonBordered',
  colorTextButtonHover: 'colorTextButtonHover',
  colorTextButtonBorderedHover: 'colorTextButtonBorderedHover',
  colorTextButtonActive: 'colorTextButtonActive',
  colorTextButtonBorderedActive: 'colorTextButtonBorderedActive',
  borderColorButton: 'borderColorButton',
  borderColorButtonHover: 'borderColorButtonHover',
  borderColorButtonActive: 'borderColorButtonActive',
};

export type Tokens = $Keys<typeof TOKENS>;
