import { base } from '../base';

export const badge = {
  background: {
    neutral: base.palette.cloud.light,
    info: base.palette.blue.light,
    success: base.palette.green.light,
    warning: base.palette.orange.light,
    critical: base.palette.red.light,
    dark: base.palette.ink.normal,
    white: base.palette.white.normal,
    infoInverted: base.palette.blue.normal,
    criticalInverted: base.palette.red.normal,
  },

  borderRadius: '12px',

  height: base.sizes.md,

  icon: {
    margin: `0 ${base.spacing.xxs} 0 0`,
  },

  padding: `0 ${base.spacing.xs}`,

  text: {
    colors: {
      neutral: base.palette.ink.dark,
      info: base.palette.blue.normal,
      success: base.palette.green.normal,
      warning: base.palette.orange.normal,
      critical: base.palette.red.normal,
      dark: base.palette.white.normal,
      white: base.palette.ink.dark,
      infoInverted: base.palette.white.normal,
      criticalInverted: base.palette.white.normal,
    },
  },

  width: {
    circled: base.sizes.md,
  },
};
