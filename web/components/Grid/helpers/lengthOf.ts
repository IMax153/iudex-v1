import { splitToWords } from './splitToWords';

export type LengthOf = (value: string) => number;

/*
  This function just gives us a count of cells (columns or rows).
 */
export const lengthOf: LengthOf = value => {
  const split = splitToWords(value);
  return split ? split.length : 0;
};
