import { Viewport } from '../types';

export const isMobileViewport = (viewport: Viewport) =>
  viewport === 'smallMobile' || viewport === 'mediumMobile' || viewport === 'largeMobile';
