import { $Keys } from '../../lib/ts';

export const SIZE_OPTIONS = {
  small: 'small',
  normal: 'normal',
};

export type SizeOptions = $Keys<typeof SIZE_OPTIONS>;

export const RESIZE_OPTIONS = {
  vertical: 'vertical',
  none: 'none',
};

export type ResizeOptions = $Keys<typeof RESIZE_OPTIONS>;
