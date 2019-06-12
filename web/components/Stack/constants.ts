import { $Keys } from '../../lib/ts';

export const DIRECTIONS = {
  row: 'row',
  column: 'column',
  'row-reverse': 'row-reverse',
  'column-reverse': 'column-reverse',
};

export type DirectionKeys = $Keys<typeof DIRECTIONS>;

export const ALIGNS = {
  start: 'start',
  end: 'end',
  center: 'center',
};

export type AlignKeys = $Keys<typeof ALIGNS>;

export const JUSTIFY = {
  start: 'start',
  end: 'end',
  center: 'center',
  between: 'between',
  around: 'around',
};

export type JustifyKeys = $Keys<typeof JUSTIFY>;

export const SPACINGS = {
  none: 'none',
  extraTight: 'extraTight',
  tight: 'tight',
  condensed: 'condensed',
  compact: 'compact',
  natural: 'natural',
  comfy: 'comfy',
  loose: 'loose',
  extraLoose: 'extraLoose',
};

export type SpacingKeys = $Keys<typeof SPACINGS>;
