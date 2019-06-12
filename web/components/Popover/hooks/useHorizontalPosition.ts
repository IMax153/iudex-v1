import { useState, useEffect } from 'react';

import { ANCHORS, Anchors } from '../constants';
import { Dimensions } from './useDimensions';

type UseHorizontalPosition = (desiredAnchor: Anchors[], positions: Dimensions) => Anchors;

export const useHorizontalPosition: UseHorizontalPosition = (desiredAnchor, positions) => {
  const [anchor, setAnchor] = useState<Anchors>('start');

  useEffect(() => {
    const canBeAnchorLeft =
      positions.containerLeft + positions.popoverWidth < positions.windowWidth;
    const canBeAnchorRight =
      positions.containerLeft + positions.containerWidth >= positions.popoverWidth;
    // returns the position name if the position can be set

    const isInside = (p: Anchors) => {
      if (p === ANCHORS.start && canBeAnchorLeft) {
        return ANCHORS.start;
      }
      if (p === ANCHORS.end && canBeAnchorRight) {
        return ANCHORS.end;
      }
      return false;
    };

    const possibleAnchor = desiredAnchor.map(p => isInside(p)).filter(p => typeof p === 'string');

    const posAnchor = possibleAnchor[0];
    if (typeof posAnchor === 'string') {
      setAnchor(posAnchor);
    }
  }, [
    positions.containerLeft,
    positions.popoverWidth,
    positions.windowWidth,
    positions.containerWidth,
    desiredAnchor,
  ]);

  return anchor;
};
