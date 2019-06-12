import { Theme } from '../../../styles';
import { Appearance, AppearanceOptions } from '../types';

export const getAppearance = (theme: Theme, appearance: Appearance) => {
  const appearances: AppearanceOptions = {
    success: {
      text: theme.base.palette.green.dark,
      fg: theme.base.palette.green.normal,
      bg: theme.base.palette.green.light,
    },
    error: {
      text: theme.base.palette.red.dark,
      fg: theme.base.palette.red.normal,
      bg: theme.base.palette.red.light,
    },
    warning: {
      text: theme.base.palette.orange.dark,
      fg: theme.base.palette.orange.normal,
      bg: theme.base.palette.orange.light,
    },
    info: {
      text: theme.base.palette.cloud.light,
      fg: theme.base.palette.ink.normal,
      bg: theme.base.palette.ink.light,
    },
  };

  return appearances[appearance];
};
