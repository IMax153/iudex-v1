import React, { PropsWithChildren } from 'react';

import styled, { Theme } from '../../styles';
import { SpacingsType } from '../../styles/theme/utils/spaceAfter';
import { TYPE_OPTIONS, TypeOptions, SIZE_OPTIONS, SizeOptions, TOKENS, Tokens } from './constants';
import { FormFeedback } from '../FormFeedback';
import { FormLabel as DefaultFormLabel } from '../FormLabel';

interface Props {
  className?: string;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  inlineLabel?: boolean;
  required?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
  size?: 'small' | 'normal';
  spaceAfter?: SpacingsType;
  error?: React.ReactNode;
  help?: React.ReactNode;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

interface InternalProps {
  disabled: boolean;
  error: React.ReactNode;
  size: SizeOptions;
  spaceAfter: SpacingsType;
}

type FieldProps = Pick<InternalProps, 'spaceAfter'>;
type FakeInputProps = Pick<InternalProps, 'disabled' | 'error' | 'size'>;
type InputContainerProps = Pick<InternalProps, 'disabled' | 'error' | 'size'>;
type StyledInlineLabelProps = Pick<InternalProps, 'size'>;
type PrefixProps = Pick<InternalProps, 'size'>;
type SuffixProps = Pick<InternalProps, 'disabled' | 'size'>;

const getToken = (name: Tokens) => ({ theme, size }: { theme: Theme; size: SizeOptions }) => {
  const tokens = {
    [TOKENS.heightInput]: {
      [SIZE_OPTIONS.small]: theme.inputField.height.small,
      [SIZE_OPTIONS.normal]: theme.inputField.height.normal,
    },
    [TOKENS.fontSizeInput]: {
      [SIZE_OPTIONS.small]: theme.inputField.fontSize.small,
      [SIZE_OPTIONS.normal]: theme.inputField.fontSize.normal,
    },
    [TOKENS.iconSize]: {
      [SIZE_OPTIONS.small]: theme.inputField.icon.width.small,
      [SIZE_OPTIONS.normal]: theme.inputField.icon.width.normal,
    },
  };
  return tokens[name][size];
};

const getPadding = () => ({ theme, size }: { theme: Theme; size: SizeOptions }) => {
  const tokens = {
    [SIZE_OPTIONS.small]: theme.inputField.padding.small,
    [SIZE_OPTIONS.normal]: theme.inputField.padding.normal,
  };
  return tokens[size];
};

const Field = styled.label<FieldProps>`
  font-family: ${({ theme }) => theme.base.font.family};
  position: relative;
  display: block;
  z-index: 2;
  flex: 1 1 100%;
  width: 100%;
  margin-bottom: ${({ theme, spaceAfter }) => theme.utils.spaceAfter(spaceAfter)};
`;

export const FakeInput = styled.div<FakeInputProps>`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: ${getToken('heightInput')};
  border-radius: ${({ theme }) => theme.inputField.border.radius};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.inputField.border.width.default} ${
        error ? theme.inputField.border.colors.error : theme.inputField.border.colors.default
      }`};
  background: ${({ disabled, theme }) =>
    disabled ? theme.inputField.background.disabled : theme.inputField.background.default};
  font-size: ${getToken('fontSizeInput')};
  transition: all
    ${({ theme }) =>
      `${theme.inputField.transition.duration} ${theme.inputField.transition.animation}`};
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: ${getToken('heightInput')};
  border-radius: ${({ theme }) => theme.inputField.border.radius};
  color: ${({ disabled, theme }) =>
    disabled ? theme.inputField.text.colors.disabled : theme.inputField.text.colors.default};
  font-size: ${getToken('fontSizeInput')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  &:hover > ${FakeInput} {
    ${({ theme, disabled, error }) =>
      !disabled &&
      `box-shadow: inset 0 0 0 ${theme.inputField.border.width.default} ${
        error ? theme.inputField.border.colors.errorHover : theme.inputField.border.colors.hover
      }`};
  }
`;

const StyledInlineLabel = styled.div<StyledInlineLabelProps>`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding: ${({ theme }) => `0 0 0 ${theme.base.spacing.sm}`};

  ${DefaultFormLabel} {
    margin-bottom: 0;
    font-size: ${getToken('fontSizeInput')};
    line-height: normal;
    z-index: 3;
    white-space: nowrap;
  }
`;

export const Prefix = styled.div<PrefixProps>`
  height: 100%;
  color: ${({ theme }) => theme.inputField.text.colors.prefix};
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding: ${({ theme }) => `0 0 0 ${theme.base.spacing.sm}`};
  z-index: 3;

  & > svg {
    width: ${getToken('iconSize')};
    height: ${getToken('iconSize')};
    color: ${({ theme }) => theme.inputField.icon.colors.default};
  }
`;

const Suffix = styled.div<SuffixProps>`
  height: ${getToken('heightInput')};
  color: ${({ theme }) => theme.inputField.text.colors.prefix};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  z-index: 3;

  & svg {
    color: ${({ theme }) => theme.inputField.icon.colors.secondary};
  }
`;

const InputComponent = React.forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  ({ type, size, error, help, inlineLabel, prefix, suffix, ...props }, ref) => (
    <input type={type} {...props} ref={ref} />
  ),
);

InputComponent.displayName = 'InputComponent';

export const Input = styled(InputComponent)`
  appearance: none;
  -webkit-text-fill-color: ${({ disabled }) => disabled && 'inherit'};
  font-family: ${({ theme }) => theme.base.font.family};
  border: none;
  padding: ${getPadding()};
  font-size: inherit;
  font-weight: ${({ inlineLabel, theme }) =>
    inlineLabel ? theme.base.font.weight.medium : theme.base.font.weight.normal};
  color: inherit;
  background-color: transparent;
  cursor: inherit;
  flex: 1 1 20%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.inputField.border.radius};
  z-index: 2;
  /* FIREFOX flexbox bug: the input doesn't shrink properly */
  min-width: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[data-com-onepassword-filled] {
    background-color: inherit !important;
  }

  &:focus {
    outline: none;

    & ~ ${FakeInput} {
      box-shadow: inset 0 0 0
        ${({ theme }) =>
          `${theme.inputField.border.width.focus} ${theme.inputField.border.colors.focus}`};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.inputField.placeholder.colors.default};
    /* Firefox */
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.inputField.placeholder.colors.default};
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.inputField.placeholder.colors.default};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
`;

const FormLabel = ({
  label,
  isFilled,
  required,
}: {
  label: React.ReactNode;
  isFilled: boolean;
  required: boolean;
}) => (
  <DefaultFormLabel filled={isFilled} required={required}>
    {label}
  </DefaultFormLabel>
);

export const InputField = React.forwardRef<
  HTMLInputElement,
  PropsWithChildren<Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>>
>((props, ref) => {
  const {
    disabled = false,
    size = SIZE_OPTIONS.normal as SizeOptions,
    type = TYPE_OPTIONS.text as TypeOptions,
    label,
    inlineLabel,
    required = false,
    error = undefined,
    name,
    prefix,
    onChange,
    onFocus,
    onBlur,
    onKeyUp,
    onKeyDown,
    placeholder,
    minValue,
    maxValue,
    minLength,
    maxLength,
    suffix,
    help,
    value,
    // tags,
    tabIndex,
    readOnly,
    autoComplete,
    spaceAfter = 'none',
  } = props;

  return (
    <Field spaceAfter={spaceAfter}>
      {label && !inlineLabel && <FormLabel label={label} isFilled={!!value} required={required} />}
      <InputContainer size={size} disabled={disabled} error={error}>
        {prefix && <Prefix size={size}>{prefix}</Prefix>}
        {label && inlineLabel && (
          <StyledInlineLabel size={size}>
            <FormLabel label={label} isFilled={!!value} required={required} />
          </StyledInlineLabel>
        )}
        {/* {tags && (
            <StyledInputTags>
              <StyledInputTagsInner>{tags}</StyledInputTagsInner>
            </StyledInputTags>
          )} */}
        {/*
           // @ts-ignore */}
        <Input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          min={minValue}
          max={maxValue}
          minLength={minLength}
          maxLength={maxLength}
          size={size}
          error={error}
          ref={ref}
          tabIndex={tabIndex}
          inlineLabel={inlineLabel}
          readOnly={readOnly}
          autoComplete={autoComplete}
        />
        {suffix && (
          <Suffix disabled={disabled} size={size}>
            {suffix}
          </Suffix>
        )}
        <FakeInput size={size} disabled={disabled} error={error} />
      </InputContainer>
      {help && !error && <FormFeedback type="help">{help}</FormFeedback>}
      {error && <FormFeedback type="error">{error}</FormFeedback>}
    </Field>
  );
});

InputField.displayName = 'InputField';
