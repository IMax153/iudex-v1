import React, { useState, useCallback } from 'react';

import { StepperProps } from './types';
import { validateIncrement, validateDecrement } from './helpers';
import { StepperStateless } from './StepperStateless';

export const Stepper: React.FC<StepperProps> = ({
  name,
  defaultValue,
  minValue = Number.NEGATIVE_INFINITY,
  maxValue = Number.POSITIVE_INFINITY,
  step = 1,
  titleDecrement,
  titleIncrement,
  disabled,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [value, setValue] = useState(defaultValue || 0);

  const setValueAndInjectCallback = useCallback(
    (value: number) => {
      if (onChange) onChange(value);
      setValue(value);
    },
    [onChange],
  );

  const incrementCounter = useCallback(() => {
    setValueAndInjectCallback(validateIncrement({ value, maxValue, step }));
  }, [value, maxValue, step, setValueAndInjectCallback]);

  const decrementCounter = useCallback(() => {
    setValueAndInjectCallback(validateDecrement({ value, minValue, step }));
  }, [value, minValue, step, setValueAndInjectCallback]);

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 40) {
      ev.preventDefault();
      decrementCounter();
    }
    if (ev.keyCode === 38) {
      ev.preventDefault();
      incrementCounter();
    }
  };

  return (
    <StepperStateless
      name={name}
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      disabled={disabled}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onKeyDown={handleKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      onIncrement={incrementCounter}
      onDecrement={decrementCounter}
    />
  );
};
