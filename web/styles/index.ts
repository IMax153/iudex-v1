import * as styledComponents from 'styled-components';

import { theme } from './theme';

export type Theme = typeof theme;

const {
  default: styled,
  withTheme,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  styled as default,
  withTheme,
  css,
  createGlobalStyle,
  keyframes,
  theme,
  ThemeProvider,
  ServerStyleSheet,
};
