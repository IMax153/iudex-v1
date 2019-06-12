import { $Keys } from '../../lib/ts';

export const TYPE_OPTIONS = {
  primary: 'primary',
  secondary: 'secondary',
  attention: 'attention',
  info: 'info',
  success: 'success',
  warning: 'warning',
  critical: 'critical',
  white: 'white',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;

export const SIZE_OPTIONS = {
  small: 'small',
  normal: 'normal',
  large: 'large',
};

export type SizeOptions = $Keys<typeof SIZE_OPTIONS>;

export const WEIGHT_OPTIONS = {
  normal: 'normal',
  bold: 'bold',
};

export type WeightOptions = $Keys<typeof WEIGHT_OPTIONS>;

export const ELEMENT_OPTIONS = {
  p: 'p',
  span: 'span',
  div: 'div',
};

export type ElementOptions = $Keys<typeof ELEMENT_OPTIONS>;
