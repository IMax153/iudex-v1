import { JUSTIFY, JustifyKeys } from '../constants';

export const getJustify = (justify?: JustifyKeys) => {
  const tokens = {
    [JUSTIFY.start]: 'flex-start',
    [JUSTIFY.end]: 'flex-end',
    [JUSTIFY.center]: 'center',
    [JUSTIFY.between]: 'space-between',
    [JUSTIFY.around]: 'space-around',
  };
  return justify && tokens[justify];
};
