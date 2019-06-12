interface Params {
  value: number;
  minValue?: number;
  step?: number;
}

type ValidateDecrement = (params: Params) => number;

export const validateDecrement: ValidateDecrement = ({
  value,
  minValue = Number.NEGATIVE_INFINITY,
  step = 1,
}) => {
  const newValue = value - step;
  const calculatedValue = newValue <= +minValue ? minValue : newValue;
  return calculatedValue;
};
