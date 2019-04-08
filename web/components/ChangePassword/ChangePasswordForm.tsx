import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { object, ref, string } from 'yup';

import { ChangePasswordComponent } from '../../generated/graphql';
import { redirect } from '../../lib/browser/redirect';
import { InputField } from '../InputField';

interface ChangePasswordFormProps {
  token: string;
}

const initialValues = {
  password: '',
  passwordConfirm: '',
};

const validationSchema = object({
  password: string()
    .trim()
    .min(8, 'Must be at least 8 characters')
    .max(16, 'Must be no longer than 16 characters')
    .matches(/(?=.[!@#*$%^&])/, 'Must contain at least one special character')
    .required('Password required'),
  passwordConfirm: string()
    .trim()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Confirm password'),
});

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ token }) => {
  return (
    <ChangePasswordComponent>
      {(changePasswordMutation, { client, loading }) => (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const { passwordConfirm, ...data } = values;
            actions.setSubmitting(true);
            try {
              await changePasswordMutation({ variables: { data: { ...data, token } } }); //
              await client.cache.reset();
              redirect(undefined, '/login');
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
                      <Button
                        fluid
                        type="submit"
                        size="large"
                        color="teal"
                        disabled={isSubmitting || !isValid}
                        loading={loading}
                      >
                        Change Password
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Form>
          )}
        </Formik>
      )}
    </ChangePasswordComponent>
  );
};
