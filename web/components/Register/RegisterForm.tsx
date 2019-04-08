import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { Button, Form, Grid, Segment, Dropdown } from 'semantic-ui-react';
import { object, ref, string } from 'yup';

import { RegisterComponent } from '../../generated/graphql';
import { redirect } from '../../lib/browser/redirect';
import { InputField } from '../InputField';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  position: '',
};

const validationSchema = object({
  firstName: string()
    .trim()
    .required('First name required'),
  lastName: string()
    .trim()
    .required('Last name required'),
  email: string()
    .trim()
    .email('Please provide a valid email')
    .required('Email required'),
  password: string()
    .trim()
    .min(8, 'Must be at least 8 characters')
    .max(16, 'Must be no longer than 16 characters')
    .matches(/(?=.[!@#*$%^&])/, 'Must contain at least one special character')
    .required('Password required'),
  passwordConfirm: string()
    .trim()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required(),
  position: string().required('Select position'),
});

export const RegisterForm: React.FC = () => {
  return (
    <RegisterComponent>
      {(registerMutation, { client, loading }) => (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const { passwordConfirm, ...data } = values;
            actions.setSubmitting(true);
            try {
              await registerMutation({ variables: { data } as any }); //
              await client.cache.reset();
              redirect(undefined, '/user/confirm');
            } catch (error) {
              actions.resetForm();
            }
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <Form size="large" onSubmit={handleSubmit}>
              <Segment textAlign="left">
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Field
                        name="firstName"
                        render={(formikProps: FieldProps) => (
                          <InputField
                            icon="address card"
                            iconPosition="left"
                            placeholder="First Name"
                            {...formikProps}
                          />
                        )}
                      />
                    </Grid.Column>

                    <Grid.Column>
                      <Field
                        name="lastName"
                        render={(formikProps: FieldProps) => (
                          <InputField
                            icon="address card"
                            iconPosition="left"
                            placeholder="Last Name"
                            {...formikProps}
                          />
                        )}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Field
                        name="email"
                        render={(formikProps: FieldProps) => (
                          <InputField
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                            {...formikProps}
                          />
                        )}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Field
                        name="password"
                        render={(formikProps: FieldProps) => (
                          <InputField
                            type="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            {...formikProps}
                          />
                        )}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Field
                        name="passwordConfirm"
                        render={(formikProps: FieldProps) => (
                          <InputField
                            type="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Confirm Password"
                            {...formikProps}
                          />
                        )}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Field
                        name="position"
                        render={({ field, form }: FieldProps) => (
                          <Dropdown
                            clearable
                            fluid
                            search
                            selection
                            placeholder="Select Position"
                            onChange={(_, { value }) => form.setFieldValue(field.name, value)}
                            onBlur={() => form.setFieldTouched(field.name)}
                            error={Boolean(form.touched[field.name] && form.errors[field.name])}
                            options={[
                              { key: 'PHARMACIST', value: 'PHARMACIST', text: 'Pharmacist' },
                              { key: 'RESIDENT', value: 'RESIDENT', text: 'Resident' },
                            ]}
                          />
                        )}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Button
                        fluid
                        type="submit"
                        size="large"
                        color="teal"
                        disabled={isSubmitting || !isValid}
                        loading={loading}
                      >
                        Sign Up
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Form>
          )}
        </Formik>
      )}
    </RegisterComponent>
  );
};
