import { $Keys } from '../../../../lib/utils';

export const DURATION_OPTIONS = {
  slow: 'slow',
  normal: 'normal',
  fast: 'fast',
};

export type DurationOptions = $Keys<typeof DURATION_OPTIONS>;
