import { base } from '../base';

export const popover = {
  background: {
    default: base.palette.white.normal,
  },

  border: {
    topLeftRadius: '9px',
    topRightRadius: '9px',
  },

  boxShadow: `${base.boxShadow.elevated} ${base.boxShadow.colors.elevated}`,

  padding: base.spacing.md,
};
