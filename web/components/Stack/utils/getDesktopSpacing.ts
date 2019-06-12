import { SPACINGS } from '../constants';

export const getDesktopSpacing = () => ({
  [SPACINGS.extraTight]: '2px',
  [SPACINGS.tight]: '4px',
  [SPACINGS.condensed]: '8px',
  [SPACINGS.compact]: '12px',
  [SPACINGS.natural]: '16px',
  [SPACINGS.comfy]: '24px',
  [SPACINGS.loose]: '32px',
  [SPACINGS.extraLoose]: '40px',
});
