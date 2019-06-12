import { PlacementOptions, TranslateOptions } from './types';

export const NOOP = () => {};

export const PLACEMENT_OPTIONS: PlacementOptions = {
  'top-left': { top: 0, left: 0 },
  'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 0, right: 0 },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 0, right: 0 },
};

export const TRANSLATE_OPTIONS: TranslateOptions = {
  right: 'translate3d(120%, 0, 0)',
  left: 'translate3d(-120%, 0, 0)',
  bottom: 'translate3d(0, 120%, 0)',
  top: 'translate3d(0, -120%, 0)',
};
