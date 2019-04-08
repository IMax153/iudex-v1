import React, { Fragment } from 'react';
import { FieldProps } from 'formik';
import { Form, Label, StrictInputProps } from 'semantic-ui-react';

interface InputFieldProps extends StrictInputProps, FieldProps {
  type?: string;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  field,
  form: { touched, errors },
  placeholder,
  ...rest
}) => {
  return (
    <Fragment>
      {touched[field.name] && errors[field.name] && (
        <Label pointing="below" color="red" size="tiny">
          {errors[field.name]}
        </Label>
      )}

      <Form.Input type={type || 'text'} placeholder={placeholder} {...field} {...rest} />
    </Fragment>
  );
};
