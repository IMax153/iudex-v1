import { Placement, TransitionState, TransitionStateOptions } from '../types';
import { getTranslate } from './getTranslate';

export const getTransform = (state: TransitionState, placement: Placement) => {
  const states: TransitionStateOptions = {
    entering: `
      transform: ${getTranslate(placement)};
    `,
    entered: `
      transform: translate3d(0, 0, 0);
    `,
    exiting: `
      transform: ${getTranslate(placement)};
    `,
    exited: `
      transform: ${getTranslate(placement)};
    `,
    unmounted: '',
  };

  return states[state];
};
