import React, { Fragment } from 'react';
import { Field, FieldProps, getIn } from 'formik';
import { Header, Label, TextArea as SemanticTextArea } from 'semantic-ui-react';

interface TextAreaProps {
  label?: string;
  name: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label = 'Comment', name }) => {
  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps) => (
        <Fragment>
          {getIn(form.errors, field.name) && (
            <Label pointing="below" color="red" size="tiny">
              {getIn(form.errors, field.name)}
            </Label>
          )}

          <Header sub size="tiny" style={{ marginTop: '0.5em' }} content={label} />

          <SemanticTextArea
            onChange={(_, { value }) => form.setFieldValue(field.name, value)}
            style={{ resize: 'none' }}
          />
        </Fragment>
      )}
    />
  );
};
