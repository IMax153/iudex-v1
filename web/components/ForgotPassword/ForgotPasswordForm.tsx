import React from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { object, string } from 'yup';

import { ForgotPasswordComponent } from '../../generated/graphql';
import { redirect } from '../../lib/browser/redirect';
import { InputField } from '../InputField';

const initialValues = {
  email: '',
};

const validationSchema = object({
  email: string()
    .trim()
    .email('Please provide a valid email')
    .required('Email required'),
});

export const ForgotPasswordForm: React.FC = () => {
  return (
    <ForgotPasswordComponent>
      {(forgotPasswordMutation, { client, loading }) => (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (data, actions) => {
            actions.setSubmitting(true);
            try {
              await forgotPasswordMutation({ variables: { data } }); //
              await client.cache.reset();
              redirect(undefined, '/user/change-password');
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
                      <Button
                        fluid
                        type="submit"
                        size="large"
                        color="teal"
                        disabled={isSubmitting || !isValid}
                        loading={loading}
                      >
                        Submit
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Form>
          )}
        </Formik>
      )}
    </ForgotPasswordComponent>
  );
};
