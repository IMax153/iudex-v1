import { css, Theme } from '../../../index';
import { DURATION_OPTIONS, DurationOptions } from './constants';

const getTransitionDuration = (duration: DurationOptions, theme: Theme) => {
  const options = {
    [DURATION_OPTIONS.slow]: theme.base.transition.duration.slow,
    [DURATION_OPTIONS.normal]: theme.base.transition.duration.normal,
    [DURATION_OPTIONS.fast]: theme.base.transition.duration.fast,
  };
  return options[duration];
};

export function transition(
  properties: string[],
  duration: DurationOptions,
  timingFunction: string
) {
  return css`
    ${({ theme }) =>
      properties
        .map(property => `${property} ${getTransitionDuration(duration, theme)} ${timingFunction}`)
        .join(',')};
  `;
}
