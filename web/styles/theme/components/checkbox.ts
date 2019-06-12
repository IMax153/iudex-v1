import { base } from '../base';

export const checkbox = {
  border: {
    colors: {
      default: base.palette.ink.lighter,
      error: base.palette.red.normal,
      hover: base.palette.ink.light,
      active: base.palette.ink.normal,
      focus: base.palette.blue.normal,
    },
  },

  height: '20px',

  icon: {
    colors: {
      default: base.palette.product.normal,
      disabled: base.palette.ink.lighter,
    },
  },

  info: {
    colors: {
      default: base.palette.ink.light,
    },
  },

  modifiers: {
    scale: {
      active: 0.95,
    },
  },

  opacity: {
    disabled: base.opacity.md,
  },

  width: '20px',
};
