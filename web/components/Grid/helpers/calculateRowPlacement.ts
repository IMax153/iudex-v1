type CalculateRowPlacement = (
  childIndex: number,
  columnsCount: number,
  rowsCount: number
) => number;

export const calculateRowPlacement: CalculateRowPlacement = (
  childIndex,
  columnsCount,
  rowsCount
) => {
  if (rowsCount === 1) {
    return 1;
  }
  return Math.ceil(childIndex / columnsCount);
};
