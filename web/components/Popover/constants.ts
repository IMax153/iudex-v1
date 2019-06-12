import { $Keys } from '../../lib/ts';

export const TOKENS = {
  background: 'background',
  borderTopLeftRadius: 'borderTopLeftRadius',
  borderTopRightRadius: 'borderTopRightRadius',
  boxShadow: 'boxShadow',
  padding: 'padding',
};

export type Tokens = $Keys<typeof TOKENS>;

// order of POSITIONS or ANCHOR is important, the first possible value will be applied
export const POSITIONS = {
  bottom: 'bottom',
  top: 'top',
};

export type Positions = $Keys<typeof POSITIONS>;

export const ANCHORS = {
  start: 'start',
  end: 'end',
};

export type Anchors = $Keys<typeof ANCHORS>;

export const POPOVER_SPACE_BETWEEN = 4;
