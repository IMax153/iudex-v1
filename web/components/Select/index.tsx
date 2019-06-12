import React, { useState } from 'react';

import { Button } from '../Button';
import { FormFeedback } from '../FormFeedback';
import { ListChoice } from '../List';
import { Popover, Props as PopoverProps } from '../Popover';

interface Option {
  icon?: React.ReactNode;
  value: string;
  label?: string;
}

interface Props extends Omit<PopoverProps, 'content'> {
  prefix?: React.ReactNode;
  error?: boolean;
  label?: string;
  options: Option[];
  onChange?: (value: string) => void;
}

export const Select: React.FC<Props> = ({
  prefix,
  error = false,
  label,
  options,
  preferredPosition = 'bottom',
  width = '250px',
  onChange,
}) => {
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>('');

  return (
    <Popover
      content={options.map(({ icon, value, label }) => (
        <ListChoice
          key={`PopoverSelectOption:${value}`}
          icon={icon}
          title={label || ''}
          onClick={() => {
            setSelectedLabel(label);
            if (onChange) onChange(value);
          }}
        />
      ))}
      closeOnContentClick
      width={width}
      preferredPosition={preferredPosition}
    >
      <Button
        type={error ? 'critical' : 'secondary'}
        width={parseInt(width, 10)}
        iconLeft={prefix}
        bordered={error}
      >
        {selectedLabel || label}
      </Button>
      {error && <FormFeedback type="error">{error}</FormFeedback>}
    </Popover>
  );
};
