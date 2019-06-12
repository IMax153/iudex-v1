import { splitToWords } from './splitToWords';

type InsertGap = (values: string, gap: string) => string | undefined;

export const insertGap: InsertGap = (values, gap) => {
  const array = splitToWords(values);

  if (array) {
    return array
      .map((col, i, arr) => (gap && i + 1 < arr.length ? `${col} ${gap}` : col))
      .join(' ');
  }
  return undefined;
};
