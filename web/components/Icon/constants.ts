import { $Keys } from '../../lib/ts';

export const ICON_SIZES = {
  mini: 'mini',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export type IconSizes = $Keys<typeof ICON_SIZES>;

export const ICON_COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  info: 'info',
  attention: 'attention',
  success: 'success',
  warning: 'warning',
  critical: 'critical',
  brand: 'brand',
  white: 'white',
};

export type IconColors = $Keys<typeof ICON_COLORS>;
