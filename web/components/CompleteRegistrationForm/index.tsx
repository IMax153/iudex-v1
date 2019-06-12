import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import capitalize from 'lodash/fp/capitalize';

import { SetUserPositionComponent, User, Position } from '../../generated/graphql';
import { redirect } from '../../lib/browser';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { Card, CardHeader, CardSection } from '../Card';
import { Icon } from '../Icon';
import { InputField } from '../InputField';
import { Select } from '../Select';
import { Stack } from '../Stack';

interface Props {
  title: string;
  subtitle?: string;
  user: Partial<User>;
}

const validationSchema = object({
  position: string().required('Select position'),
});

export const CompleteRegistrationForm: React.FC<Props> = ({ title, subtitle, user }) => {
  const initialValues = {
    position: user.position || ('' as Position),
  };

  return (
    <SetUserPositionComponent>
      {(setUserPosition, { loading, error }) => (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (data, actions) => {
            actions.setSubmitting(true);

            try {
              const result = await setUserPosition({ variables: { data } });

              if (
                result &&
                result.data &&
                result.data.setUserPosition &&
                result.data.setUserPosition.position
              ) {
                actions.resetForm();
                redirect(undefined, '/dashboard');
              }
            } catch (error) {
              actions.resetForm();
            }

            actions.setSubmitting(false);
          }}
        >
          {({ touched, errors, isValid, isSubmitting, handleSubmit, setFieldValue }) => (
            <Card>
              <CardHeader title={title} subTitle={subtitle} headerSize="title1" />
              <CardSection>
                <Form>
                  <Stack>
                    {error && (
                      <Alert type="critical" icon>
                        {error.message.replace('GraphQL error: ', '')}
                      </Alert>
                    )}
                    <Stack direction="row">
                      <InputField
                        name="firstName"
                        prefix={<Icon icon="user-circle" color="secondary" />}
                        label="First Name"
                        value={user.firstName}
                        readOnly
                      />
                      <InputField
                        name="lastName"
                        prefix={<Icon icon="user-circle" color="secondary" />}
                        label="Last Name"
                        value={user.lastName}
                        readOnly
                      />
                    </Stack>
                    <InputField
                      type="email"
                      name="email"
                      prefix={<Icon icon="envelope" color="secondary" />}
                      label="Email"
                      value={user.email}
                      readOnly
                    />
                    <Select
                      label={capitalize(user.position as string) || 'Select Position'}
                      prefix={<Icon icon="mortar-pestle" color="secondary" />}
                      options={[
                        { label: 'Pharmacist', value: 'PHARMACIST' },
                        { label: 'Resident', value: 'RESIDENT' },
                      ]}
                      onChange={value => setFieldValue('position', value)}
                      error={Boolean(touched.position && errors.position)}
                    />
                  </Stack>
                </Form>
              </CardSection>
              <React.Fragment>
                {user.position ? null : (
                  <CardSection>
                    <Button
                      block
                      submit
                      loading={loading}
                      disabled={!isValid || isSubmitting}
                      onClick={() => handleSubmit()}
                    >
                      Register
                    </Button>
                  </CardSection>
                )}
              </React.Fragment>
            </Card>
          )}
        </Formik>
      )}
    </SetUserPositionComponent>
  );
};
