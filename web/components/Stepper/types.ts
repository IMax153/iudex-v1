export interface SharedProps {
  name?: string;
  disabled?: boolean;
  maxValue?: number;
  minValue?: number;
  titleIncrement?: string | (((v: any) => string) & string);
  titleDecrement?: string | (((v: any) => string) & string);
  onChange?: (value: string | number | string[]) => void | Promise<any>;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface StepperProps extends SharedProps {
  defaultValue?: number;
  step?: number;
}

export interface StepperStatelessProps extends SharedProps {
  value: string | number | string[];
  disabledIncrement?: boolean;
  disabledDecrement?: boolean;
  onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void | Promise<any>;
  onDecrement?: (
    ev: React.SyntheticEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void | Promise<any>;
  onIncrement?: (
    ev: React.SyntheticEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void | Promise<any>;
}
