import { DIRECTIONS, DirectionKeys } from '../constants';

export const getDirection = (direction?: DirectionKeys) => {
  if (!direction) {
    return false;
  }
  return Object.values(DIRECTIONS).indexOf(direction) !== -1 ? direction : DIRECTIONS.row;
};
