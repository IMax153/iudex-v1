import { useState, useEffect } from 'react';

import { POSITIONS, Positions } from '../constants';
import { Dimensions } from './useDimensions';

type UseVerticalPosition = (desiredPositions: Positions[], position: Dimensions) => Positions;

export const useVerticalPosition: UseVerticalPosition = (desiredPositions, pos) => {
  const [positionDirection, setPositionDirection] = useState<Positions>('bottom');

  useEffect(() => {
    const canBePositionTop = pos.containerTop - pos.popoverHeight > 0;
    const canBePositionBottom =
      pos.containerTop + pos.containerHeight + pos.popoverHeight < pos.windowHeight;

    // returns the position name if the position can be set
    const isInside = (p: Positions) => {
      if (p === POSITIONS.top && canBePositionTop) {
        return POSITIONS.top;
      }
      if (p === POSITIONS.bottom && canBePositionBottom) {
        return POSITIONS.bottom;
      }
      return false;
    };

    const possiblePositions = desiredPositions
      .map(p => isInside(p))
      // filter all non string values
      .filter(p => typeof p === 'string');

    // set the first valid position
    // ordering in POSITIONS const is important
    const posPosition = possiblePositions[0];
    if (typeof posPosition === 'string') {
      setPositionDirection(posPosition);
    }
  }, [
    pos.containerTop,
    pos.popoverHeight,
    pos.containerHeight,
    pos.windowHeight,
    desiredPositions,
  ]);

  return positionDirection;
};
