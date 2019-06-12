interface Params {
  value: number;
  maxValue?: number;
  step?: number;
}

type ValidateIncrement = (params: Params) => number;

export const validateIncrement: ValidateIncrement = ({
  value,
  maxValue = Number.POSITIVE_INFINITY,
  step = 1,
}) => {
  const newValue = value + step;
  const calculatedValue = newValue >= +maxValue ? maxValue : newValue;
  return calculatedValue;
};
