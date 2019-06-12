import { $Keys } from '../../../lib/ts';

export const ALIGN_OPTIONS = {
  left: 'left',
  center: 'center',
  right: 'right',
};

export type AlignOptions = $Keys<typeof ALIGN_OPTIONS>;
