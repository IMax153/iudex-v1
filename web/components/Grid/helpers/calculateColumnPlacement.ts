type CalculateColumnPlacement = (childIndex: number, columnsCount: number) => number;

export const calculateColumnPlacement: CalculateColumnPlacement = (childIndex, columnsCount) => {
  if (columnsCount === 1) {
    return 1;
  }
  if (childIndex % columnsCount) {
    return childIndex % columnsCount;
  }
  return columnsCount;
};
