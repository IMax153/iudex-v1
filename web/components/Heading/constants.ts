import { $Keys } from '../../lib/ts';

export const ELEMENT_OPTIONS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  div: 'div',
};

export type ElementOptions = $Keys<typeof ELEMENT_OPTIONS>;

export const TYPE_OPTIONS = {
  display: 'display',
  subtitle: 'subtitle',
  title1: 'title1',
  title2: 'title2',
  title3: 'title3',
  title4: 'title4',
  title5: 'title5',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;

export const COLOR_OPTIONS = {
  primary: 'primary',
  secondary: 'secondary',
  attention: 'attention',
  info: 'info',
  success: 'success',
  warning: 'warning',
  critical: 'critical',
  brand: 'brand',
  white: 'white',
};

export type ColorOptions = $Keys<typeof COLOR_OPTIONS>;

export const TOKENS = {
  weightHeading: 'weightHeading',
  sizeHeading: 'sizeHeading',
};

export type Tokens = $Keys<typeof TOKENS>;
