import { TRANSLATE_OPTIONS } from '../constants';
import { Placement, TranslateDirection } from '../types';

export function getTranslate(placement: Placement) {
  const pos = placement.split('-');
  const relevantPlacement = (pos[1] === 'center' ? pos[0] : pos[1]) as TranslateDirection;

  return TRANSLATE_OPTIONS[relevantPlacement];
}
