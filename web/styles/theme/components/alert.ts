import { base } from '../base';

export const alert = {
  background: {
    info: base.palette.blue.light,
    success: base.palette.green.light,
    warning: base.palette.orange.light,
    critical: base.palette.red.light,
    brand: base.palette.product.light,
  },

  icon: {
    colors: {
      info: base.palette.blue.normal,
      success: base.palette.green.normal,
      warning: base.palette.orange.normal,
      critical: base.palette.red.normal,
      brand: base.palette.product.normal,
    },
  },

  padding: {
    default: base.spacing.md,
    withIcon: base.spacing.sm,
  },

  text: {
    colors: {
      info: base.palette.blue.dark,
      success: base.palette.green.dark,
      warning: base.palette.orange.dark,
      critical: base.palette.red.dark,
      brand: base.palette.product.dark,
    },
  },

  textLinkHover: {
    colors: {
      info: base.palette.blue.darkHover,
      success: base.palette.green.darkHover,
      warning: base.palette.orange.darkHover,
      critical: base.palette.red.darkHover,
      brand: base.palette.product.darkHover,
    },
  },
};
