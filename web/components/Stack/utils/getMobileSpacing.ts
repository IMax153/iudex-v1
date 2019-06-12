import { SPACINGS } from '../constants';

export const getMobileSpacing = () => ({
  [SPACINGS.extraTight]: '2px',
  [SPACINGS.tight]: '4px',
  [SPACINGS.condensed]: '8px',
  [SPACINGS.compact]: '12px',
  [SPACINGS.natural]: '16px',
  [SPACINGS.comfy]: '20px',
  [SPACINGS.loose]: '28px',
  [SPACINGS.extraLoose]: '36px',
});
