import { capitalize, join, map, pipe, split } from 'lodash/fp';

export function formatCompetency(competency: string): string {
  return pipe(
    split('_'),
    map(capitalize),
    join(' '),
  )(competency);
}
