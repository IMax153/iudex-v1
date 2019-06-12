import React from 'react';

import styled from '../../../styles';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { StepperStatelessProps } from '../types';

const StyledStepper = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 100%;
`;

const StyledStepperInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0;
  border: 0;
  font-size: ${({ theme }) => theme.inputField.fontSize.normal};
  font-weight: ${({ theme }) => theme.base.font.weight.bold};
  color: ${({ theme }) => theme.base.palette.ink.normal};
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const StepperStateless: React.FC<StepperStatelessProps> = ({
  disabled,
  value,
  name,
  minValue = Number.NEGATIVE_INFINITY,
  maxValue = Number.POSITIVE_INFINITY,
  onKeyDown,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
  titleIncrement,
  titleDecrement,
  disabledIncrement,
  disabledDecrement,
}) => {
  return (
    <StyledStepper>
      <Button
        type="primary"
        size="small"
        title={titleDecrement}
        iconLeft={<Icon icon="minus" />}
        disabled={
          disabled ||
          disabledDecrement ||
          Boolean(typeof value === 'number' && value <= +minValue) ||
          false
        }
        onClick={ev => {
          if (onDecrement) {
            onDecrement(ev);
          }
        }}
      />
      <StyledStepperInput
        name={name}
        disabled={disabled}
        type="text"
        value={value || 0}
        min={minValue}
        max={maxValue}
        onKeyDown={ev => {
          if (onKeyDown) {
            onKeyDown(ev);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly
      />
      <Button
        type="primary"
        size="small"
        title={titleIncrement}
        iconLeft={<Icon icon="plus" />}
        disabled={
          disabled ||
          disabledIncrement ||
          (typeof value === 'number' && value >= +maxValue) ||
          false
        }
        onClick={ev => {
          if (onIncrement) {
            onIncrement(ev);
          }
        }}
      />
    </StyledStepper>
  );
};
