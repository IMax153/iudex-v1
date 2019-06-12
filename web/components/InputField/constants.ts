import { $Keys } from '../../lib/ts';

export const TYPE_OPTIONS = {
  text: 'text',
  number: 'number',
  email: 'email',
  password: 'password',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;

export const SIZE_OPTIONS = {
  small: 'small',
  normal: 'normal',
};

export type SizeOptions = $Keys<typeof SIZE_OPTIONS>;

export const TOKENS = {
  heightInput: 'heightInput',
  fontSizeInput: 'fontSizeInput',
  paddingInput: 'paddingInput',
  iconSize: 'iconSize',
};

export type Tokens = $Keys<typeof TOKENS>;
