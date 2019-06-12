import { base } from '../../base';
import { SPACINGS_AFTER } from './constants';

export type SpacingsType = keyof typeof SPACINGS_AFTER;

export const spaceAfter = (spacing: SpacingsType) => {
  const tokens = {
    [SPACINGS_AFTER.none]: '0px',
    [SPACINGS_AFTER.smallest]: base.spacing.xxs,
    [SPACINGS_AFTER.small]: base.spacing.xs,
    [SPACINGS_AFTER.normal]: base.spacing.sm,
    [SPACINGS_AFTER.medium]: base.spacing.md,
    [SPACINGS_AFTER.large]: base.spacing.lg,
    [SPACINGS_AFTER.largest]: base.spacing.xl,
  };
  return spacing && tokens[spacing];
};
