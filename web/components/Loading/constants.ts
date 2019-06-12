import { $Keys } from '../../lib/ts';

export const TYPE_OPTIONS = {
  buttonLoader: 'buttonLoader',
  searchLoader: 'searchLoader',
  boxLoader: 'boxLoader',
  pageLoader: 'pageLoader',
  inlineLoader: 'inlineLoader',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;

export const TOKENS = {
  align: 'align',
  height: 'height',
};

export type Tokens = $Keys<typeof TOKENS>;
