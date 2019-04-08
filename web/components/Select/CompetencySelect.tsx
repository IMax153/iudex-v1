import React from 'react';
import { Field, FieldProps, getIn } from 'formik';
import { Dropdown } from 'semantic-ui-react';

interface CompetencySelectProps {
  name: string;
  type?: 'core' | 'overall';
}

const options = {
  core: [
    { key: 'NEEDS_IMPROVEMENT', value: 'NEEDS_IMPROVEMENT', text: 'Needs Improvement' },
    { key: 'SATISFACTORY_PROGRESS', value: 'SATISFACTORY_PROGRESS', text: 'Satisfactory Progress' },
    { key: 'ACHIEVED', value: 'ACHIEVED', text: 'Achieved' },
    { key: 'NOT_APPLICABLE', value: 'NOT_APPLICABLE', text: 'Not Applicable' },
  ],
  overall: [
    { key: 'MEETS_EXPECTATIONS', value: 'MEETS_EXPECTATIONS', text: 'Meets Expectations' },
    {
      key: 'DOES_NOT_MEET_EXPECTATIONS',
      value: 'DOES_NOT_MEET_EXPECTATIONS',
      text: 'Does Not Meet Expectations',
    },
  ],
};

export const CompetencySelect: React.FC<CompetencySelectProps> = ({ name, type = 'core' }) => {
  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps) => (
        <Dropdown
          clearable
          fluid
          search
          selection
          placeholder="Select Competency"
          selectOnBlur={false}
          onChange={(_, { value }) => form.setFieldValue(field.name, value)}
          onBlur={() => form.setFieldTouched(field.name)}
          error={Boolean(getIn(form.touched, field.name) && getIn(form.errors, field.name))}
          options={options[type]}
        />
      )}
    />
  );
};
