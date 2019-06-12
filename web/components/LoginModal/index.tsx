import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import { LoginComponent } from '../../generated/graphql';
import { redirect } from '../../lib/browser';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { InputField } from '../InputField';
import { Modal, ModalHeader, ModalSection, ModalFooter } from '../Modal';
import { Stack } from '../Stack';

interface Props {}

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

export const LoginModal: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Login</Button>

      {open && (
        <LoginComponent>
          {(login, { loading, error, client }) => (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(true);

                try {
                  const result = await login({ variables: { data: values } });

                  if (result && result.data && result.data.login && result.data.login.user) {
                    await client.cache.reset();
                    actions.resetForm();
                    redirect(undefined, '/dashboard');
                  }
                } catch (error) {
                  actions.resetForm();
                }
                actions.setSubmitting(false);
              }}
            >
              {({
                touched,
                values,
                errors,
                isValid,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Modal size="normal" onClose={() => setOpen(false)} fixedFooter>
                  <ModalHeader title="Login" description="Enter your email and password below" />
                  <ModalSection>
                    <Form>
                      <Stack>
                        {error && (
                          <Alert type="critical" icon>
                            {error.message.replace('GraphQL error: ', '')}
                          </Alert>
                        )}
                        <InputField
                          type="email"
                          name="email"
                          prefix={<Icon icon="envelope" color="secondary" />}
                          label="Email"
                          value={values.email}
                          error={touched.email && errors.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <InputField
                          type="password"
                          name="password"
                          prefix={<Icon icon="lock" color="secondary" />}
                          label="Password"
                          value={values.password}
                          error={touched.password && errors.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Stack>
                    </Form>
                  </ModalSection>
                  <ModalFooter flex={['1 0 auto', '1 1 100%']} fixed>
                    <Button
                      block
                      submit
                      loading={loading}
                      disabled={!isValid || isSubmitting}
                      onClick={() => handleSubmit()}
                    >
                      Login
                    </Button>
                  </ModalFooter>
                </Modal>
              )}
            </Formik>
          )}
        </LoginComponent>
      )}
    </React.Fragment>
  );
};
