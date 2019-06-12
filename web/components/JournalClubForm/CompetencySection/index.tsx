import React from 'react';
import { Field, FieldProps, getIn } from 'formik';

import { Alert } from '../../Alert';
import { FlexCol } from '../../FlexCol';
import { Grid } from '../../Grid';
import { Heading } from '../../Heading';
import { Icon } from '../../Icon';
import { Select } from '../../Select';
import { Stack } from '../../Stack';
import { Text } from '../../Text';
import { TextArea } from '../../TextArea';

interface SectionInfo {
  name: string;
  title: string;
  description: string;
}

interface Option {
  label: string;
  value: string;
}

interface Props {
  heading: string;
  sections: SectionInfo[];
  options: Option[];
}

export const CompetencySection: React.FC<Props> = ({ heading, sections, options }) => {
  return (
    <Stack>
      <Alert type="brand">
        <Heading type="title1">{heading}</Heading>
      </Alert>

      <Grid columns="repeat(2, 1fr)" gap="10px">
        {sections.map(({ name, title, description }) => (
          <Grid key={`CompetencySection:${name}`} rows="repeat(2, 50px) auto 1fr" gap="10px">
            <FlexCol>
              <Heading type="title2">{title}</Heading>
            </FlexCol>

            <Field
              name={`${name}.competency`}
              render={({ field, form }: FieldProps) => {
                const error = getIn(form.touched, field.name) && getIn(form.errors, field.name);

                return (
                  <Select
                    label="Competency"
                    prefix={
                      <Icon icon="clipboard-check" color={error ? 'critical' : 'secondary'} />
                    }
                    error={error}
                    options={options}
                    onChange={value => form.setFieldValue(field.name, value)}
                  />
                );
              }}
            />

            <Text>{description}</Text>

            <Field
              name={`${name}.comment`}
              render={({ field, form }: FieldProps) => {
                const error = getIn(form.touched, field.name) && getIn(form.errors, field.name);

                return (
                  <TextArea
                    name={field.name}
                    value={field.value}
                    label="Comments"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    error={error}
                    fullHeight
                    resize="none"
                  />
                );
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
