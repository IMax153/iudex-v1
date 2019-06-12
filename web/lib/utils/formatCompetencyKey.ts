import { capitalize, join, map, pipe, snakeCase, split } from 'lodash/fp';

export function formatCompetencyKey(competency: string): string {
  return pipe(
    snakeCase,
    split('_'),
    map(capitalize),
    join(' '),
  )(competency);
}
