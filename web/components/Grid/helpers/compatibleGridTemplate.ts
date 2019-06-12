import { insertGap } from './insertGap';
import { splitToWords } from './splitToWords';

type CompatibleGridTemplate = (cells?: string, gap?: string) => string | undefined;

/*
  This function is firstly converting "repeat(3, 1fr) 2fr" to plain format that is compatible with IE
  For simplicity, the IE compatible format "(1fr)[3]" for repeat is not used
  Also if gap is defined, it adds gap after each column/row
 */

export const compatibleGridTemplate: CompatibleGridTemplate = (cells, gap) => {
  const cellsMap = splitToWords(cells);
  const plainCells =
    cellsMap &&
    cellsMap
      .map(item => {
        if (/repeat\((.*\))/g.test(item)) {
          const values = /repeat\((\d+),\s(.*\)?)\)/g.exec(item);
          return (
            values &&
            Array(...Array(Number(values[1])))
              .map(() => values[2])
              .join(' ')
          );
        }
        return item;
      })
      .join(' ');

  if (!gap && plainCells) {
    return plainCells;
  }

  return plainCells && gap ? insertGap(plainCells, gap) : undefined;
};
