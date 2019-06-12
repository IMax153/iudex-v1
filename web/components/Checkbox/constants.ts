import { $Keys } from '../../lib/ts';

export const TOKENS = {
  borderColor: 'borderColor',
  iconColor: 'iconColor',
};

export type Tokens = $Keys<typeof TOKENS>;
