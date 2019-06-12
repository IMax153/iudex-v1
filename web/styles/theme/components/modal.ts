import { base } from '../base';

export const modal = {
  background: base.palette.white.normal,

  borderRadius: base.spacing.xs,

  boxShadow: `${base.shadow.modal} ${base.shadow.colors.modal}`,

  footer: {
    boxShadow: {
      actionable: {
        inverted: base.transition.duration.fast,
      },
    },

    colors: {
      background: base.palette.white.normal,
    },

    padding: {
      default: base.spacing.md,
      desktop: base.spacing.xs,
    },
  },

  header: {
    border: {
      radius: base.spacing.xs,
    },

    colors: {
      background: {
        default: base.palette.white.normal,
        suppressed: base.palette.cloud.light,
      },
    },

    font: {
      size: '18px',
    },

    margin: {
      title: base.spacing.xs,
      titleWithIllustration: base.spacing.xs,
    },

    padding: {
      header: `${base.spacing.lg} ${base.spacing.md} 0 ${base.spacing.md}`,
      headerIllustrationSuppressed: `${base.spacing.xl} ${base.spacing.md} ${base.spacing.lg} ${
        base.spacing.md
      }`,
      headerIllustrationNotSuppressed: `${base.spacing.xl} ${base.spacing.md} 0 ${base.spacing.md}`,
      headerNoIllustrationSuppressed: `${base.spacing.lg} ${base.spacing.md} ${base.spacing.lg} ${
        base.spacing.md
      }`,
    },

    text: {
      padding: base.spacing.xl,
    },
  },

  section: {
    border: {
      radius: base.spacing.xs,
    },

    colors: {
      border: base.palette.cloud.normal,

      background: {
        default: base.palette.white.normal,
        suppressed: base.palette.cloud.light,
      },
    },

    padding: `${base.spacing.lg} ${base.spacing.md}`,
  },

  width: {
    sm: '540px',
    md: '740px',
    lg: '1280px',
  },

  zIndex: {
    default: '825',
    overlay: '800',
  },
};
