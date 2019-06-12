import { ALIGNS, AlignKeys } from '../constants';

export const getAlign = (align?: AlignKeys) => {
  const tokens = {
    [ALIGNS.start]: 'flex-start',
    [ALIGNS.end]: 'flex-end',
    [ALIGNS.center]: 'center',
  };
  return align && tokens[align];
};
