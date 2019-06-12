import { base } from '../base';
import { hexToRgb } from '../utils/hexToRgb';

export const table = {
  background: {
    default: base.palette.white.normal,
    even: base.palette.cloud.light,
    hover: base.palette.cloud.normal,
    shadowLeft: `linear-gradient(to left, transparent, ${hexToRgb(base.palette.ink.lighter, 23)})`,
    shadowRight: `linear-gradient(to right, transparent, ${hexToRgb(
      base.palette.ink.lighter,
      23,
    )})`,
  },

  border: {
    colors: {
      table: base.palette.cloud.normal,
      tableHead: base.palette.ink.lighter,
    },
  },

  colors: {
    text: base.palette.ink.light,
  },

  fontWeight: {
    tableHead: base.font.weight.bold,
  },

  padding: {
    default: `${base.spacing.sm} ${base.spacing.md}`,
    compact: `${base.spacing.xs} ${base.spacing.sm}`,
  },
};
