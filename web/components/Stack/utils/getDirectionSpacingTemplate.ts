import { DIRECTIONS, DirectionKeys } from '../constants';

export const getDirectionSpacingTemplate = (direction: DirectionKeys) => {
  switch (direction) {
    case DIRECTIONS.column:
      return '0 0 __spacing__ 0';
    case DIRECTIONS.row:
      return '0 __spacing__ 0 0';
    case DIRECTIONS['column-reverse']:
      return '__spacing__ 0 0 0';
    case DIRECTIONS['row-reverse']:
      return '0 0 0 __spacing__';
    default:
      return '0 0 __spacing__ 0';
  }
};
