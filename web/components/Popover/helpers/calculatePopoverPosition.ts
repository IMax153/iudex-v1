import { ANCHORS, Anchors, POSITIONS, Positions } from '../constants';

type CalculatePopoverPosition = (preferredPosition: Positions) => [Positions[], Anchors[]];

export const calculatePopoverPosition: CalculatePopoverPosition = preferredPosition => {
  const mappedPositions = Object.keys(POSITIONS).map(k => POSITIONS[k as Positions]) as Positions[];
  const mappedAnchors = Object.keys(ANCHORS).map(k => ANCHORS[k as Anchors]) as Anchors[];

  return [
    [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
    mappedAnchors,
  ];
};
