import { base } from '../base';

export const inputField = {
  background: {
    default: base.palette.white.normal,
    disabled: base.palette.cloud.normal,
  },

  border: {
    colors: {
      default: base.palette.ink.lighter,
      hover: base.palette.ink.lighterHover,
      active: base.palette.ink.lighterActive,
      focus: base.palette.blue.normal,
      error: base.palette.red.normal,
      errorHover: base.palette.red.normalHover,
      errorFocus: base.palette.red.normal,
    },

    radius: base.borderRadius,

    width: {
      default: '1px',
      focus: '2px',
    },
  },

  fontSize: {
    small: base.font.size.md,
    normal: base.font.size.md,
  },

  height: {
    small: base.sizes.lg,
    normal: base.sizes.xl,
  },

  icon: {
    colors: {
      default: base.palette.ink.lighter,
      secondary: base.palette.ink.light,
    },

    width: {
      small: base.sizes.sm,
      normal: base.sizes.md,
    },
  },

  padding: {
    small: `0 ${base.sizes.sm}`,
    normal: `0 ${base.sizes.sm}`,
  },

  placeholder: {
    colors: {
      default: base.palette.ink.lighter,
      error: base.palette.red.normal,
      file: base.palette.ink.light,
      fileError: base.palette.red.normal,
    },
  },

  text: {
    colors: {
      default: base.palette.ink.normal,
      disabled: base.palette.ink.lighter,
      prefix: base.palette.ink.light,
    },
  },

  transition: {
    animation: base.transition.animation.default,
    duration: base.transition.duration.fast,
  },
};
