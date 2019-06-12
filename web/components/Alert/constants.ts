import { $Keys } from '../../lib/ts';

export const TYPE_OPTIONS = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  critical: 'critical',
  brand: 'brand',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;

export const TOKENS = {
  backgroundAlert: 'backgroundAlert',
  colorIconAlert: 'colorIconAlert',
  colorTextAlert: 'colorTextAlert',
  colorTextLinkAlertHover: 'colorTextLinkAlertHover',
};

export type Tokens = $Keys<typeof TOKENS>;
