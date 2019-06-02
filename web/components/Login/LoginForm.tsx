import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { Button, Form, Segment } from 'semantic-ui-react';
import { object, string } from 'yup';

import { LoginComponent } from '../../generated/graphql';
import { login } from '../../lib/auth/utilities';
import { InputField } from '../InputField';

const initialValues = { email: '', password: '' };

const validationSchema = object({
  email: string()
    .trim()
    .email('Please provide a valid email')
    .required('Email required'),
  password: string()
    .trim()
    .required('Password required'),
});

export const LoginForm: React.FC = () => {
  return (
    <LoginComponent>
      {(loginMutation, { client, loading }) => (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            try {
              const result = await loginMutation({ variables: { data: values } });

              if (result && result.data && result.data.login && result.data.login.token) {
                await client.cache.reset();
                const { token } = result.data.login;
                login({ token });
              }
            } catch (error) {
              actions.resetForm();
            }
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <Form size="large" onSubmit={handleSubmit}>
              <Segment textAlign="left">
                <Field
                  name="email"
                  render={(formikProps: FieldProps) => (
                    <InputField
                      icon="user"
                      iconPosition="left"
                      placeholder="Email"
                      {...formikProps}
                    />
                  )}
                />

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

                <Button
                  type="submit"
                  size="large"
                  color="teal"
                  disabled={isSubmitting || !isValid}
                  loading={loading}
                  fluid
                >
                  Login
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
      )}
    </LoginComponent>
  );
};