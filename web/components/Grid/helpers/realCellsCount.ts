type RealCellsCount = (gap: boolean, cells: number) => number;

/*
  Function to calculate the real count of cells (columns or rows).
  It's needed for calculating proper auto placement in IE.
*/
export const realCellsCount: RealCellsCount = (gap, cells) =>
  gap ? Math.ceil(+cells / 2) : +cells;
