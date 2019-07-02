import React, { useState } from 'react';
import { Field, FieldProps, getIn } from 'formik';
import gql from 'graphql-tag';

import { PreceptorsComponent, ResidentsComponent } from '../../../generated/graphql';
import { Alert } from '../../Alert';
import { Grid } from '../../Grid';
import { Heading } from '../../Heading';
import { Icon } from '../../Icon';
import { InputField } from '../../InputField';
import { Loading } from '../../Loading';
import { Select } from '../../Select';
import { Stack } from '../../Stack';

interface Props {
  heading: string;
}

export const PreceptorsQuery = gql`
  query Preceptors {
    users(where: { position: PRECEPTOR }, orderBy: lastName_ASC) {
      id
      fullName
    }
  }
`;

export const ResidentsQuery = gql`
  query Residents {
    users(where: { position: RESIDENT }, orderBy: lastName_ASC) {
      id
      fullName
    }
  }
`;

export const DetailsSection: React.FC<Props> = ({ heading }) => {
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <Stack>
      <Alert type="brand">
        <Heading type="title1">{heading}</Heading>
      </Alert>

      {errorMsg && (
        <Alert type="critical">
          <Heading type="title2">{errorMsg}</Heading>
        </Alert>
      )}

      <Grid columns="repeat(3, 1fr)" gap="10px" centerContent>
        <Field
          name="article"
          render={({ field, form }: FieldProps) => {
            const error = getIn(form.touched, field.name) && getIn(form.errors, field.name);

            return (
              <InputField
                label="Article"
                placeholder="Enter the title of the article"
                name={field.name}
                value={field.value}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={error}
                inlineLabel
              />
            );
          }}
        />

        <Field
          name="preceptor"
          render={({ field, form }: FieldProps) => {
            const fieldError = getIn(form.touched, field.name) && getIn(form.errors, field.name);

            return (
              <PreceptorsComponent>
                {({ data, loading, error }) => {
                  if (error) {
                    setErrorMsg(error.message);
                    return null;
                  }

                  if (loading || !data || !data.users) return <Loading />;

                  const options = data.users.map(({ id, fullName }) => ({
                    label: fullName,
                    value: id,
                  }));

                  return (
                    <Select
                      label="Journal Club Preceptor"
                      prefix={<Icon icon="user-circle" color={error ? 'critical' : 'secondary'} />}
                      error={fieldError}
                      options={options}
                      onChange={value => form.setFieldValue(field.name, value)}
                      closeOnContentClick
                    />
                  );
                }}
              </PreceptorsComponent>
            );
          }}
        />

        <Field
          name="resident"
          render={({ field, form }: FieldProps) => {
            const fieldError = getIn(form.touched, field.name) && getIn(form.errors, field.name);

            return (
              <ResidentsComponent>
                {({ data, loading, error }) => {
                  if (error) {
                    setErrorMsg(error.message);
                    return null;
                  }

                  if (loading || !data || !data.users) return <Loading />;

                  const options = data.users.map(({ id, fullName }) => ({
                    label: fullName,
                    value: id,
                  }));

                  return (
                    <Select
                      label="Presenting Resident"
                      prefix={<Icon icon="user-circle" color={error ? 'critical' : 'secondary'} />}
                      error={fieldError}
                      options={options}
                      onChange={value => form.setFieldValue(field.name, value)}
                      closeOnContentClick
                    />
                  );
                }}
              </ResidentsComponent>
            );
          }}
        />
      </Grid>
    </Stack>
  );
};
