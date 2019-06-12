import { $Keys } from '../../lib/ts';

export const TYPE_OPTIONS = {
  help: 'help',
  error: 'error',
};

export type TypeOptions = $Keys<typeof TYPE_OPTIONS>;
