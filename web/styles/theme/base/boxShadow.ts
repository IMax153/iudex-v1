import { palette } from './palette';
import { hexToRgb } from '../utils/hexToRgb';

export const boxShadow = {
  colors: {
    static: hexToRgb(palette.blue.normal, 30),
    actionable: hexToRgb(palette.ink.dark, 10),
    elevated: hexToRgb(palette.ink.dark, 30),
    modal: hexToRgb(palette.ink.dark, 40),
  },

  elevated: '0 4px 12px 0',
};
