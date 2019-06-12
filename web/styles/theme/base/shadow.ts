import { palette } from './palette';
import { hexToRgb } from '../utils/hexToRgb';

export const shadow = {
  colors: {
    modal: hexToRgb(palette.ink.dark, 40),
  },

  modal: '0 20px 60px 0',
};
