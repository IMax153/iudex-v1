import React from 'react';
import { Formik } from 'formik';
import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { reduce } from 'lodash';

import {
  CreateJournalClubComponent,
  User,
  JournalClubsDocument,
  JournalClubOrderByInput,
} from '../../generated/graphql';
import { redirect } from '../../lib/browser/redirect';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { AnalyticsSection } from './sections/AnalyticsSection';
import { CommunicationSection } from './sections/CommunicationSection';
import { CritiqueSection } from './sections/CritiqueSection';
import { DetailsSection } from './sections/DetailsSection';
import { OverallSection } from './sections/OverallSection';

interface JournalClubFormProps {
  user: Partial<User>;
}

function createConnection(data: Record<string, any>) {
  return reduce(
    data,
    (result, value, key) => {
      return { ...result, [key]: { create: value } };
    },
    {},
  );
}

export const JournalClubForm: React.FC<JournalClubFormProps> = ({ user }) => {
  return (
    <CreateJournalClubComponent>
      {(createJournalClubMutation, { loading }) => (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const { article, resident, preceptor, ...data } = values;
            actions.setSubmitting(true);
            try {
              await createJournalClubMutation({
                variables: {
                  data: {
                    article,
                    resident: { connect: { id: resident } },
                    evaluator: { connect: { id: user.id } },
                    preceptor: { connect: { id: preceptor } },
                    ...(createConnection(data) as any),
                  },
                },
                refetchQueries: [
                  {
                    query: JournalClubsDocument,
                    variables: {
                      first: 5,
                      skip: 0,
                      orderBy: JournalClubOrderByInput.CreatedAt_Desc,
                      where: {
                        OR: [{ evaluator: { id: user.id } }, { preceptor: { id: user.id } }],
                      },
                    },
                  },
                ],
              });

              redirect(undefined, '/dashboard');
            } catch (error) {
              actions.resetForm();
            }
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Segment>
                <Header as="h1" dividing style={{ marginBottom: '1.5em' }}>
                  Journal Club Evaluation
                </Header>

                <DetailsSection />

                <Header as="h3" dividing style={{ marginBottom: '1em', marginTop: '4em' }}>
                  Analytical Skills
                </Header>

                <AnalyticsSection />

                <Header as="h3" dividing style={{ marginBottom: '1em', marginTop: '4em' }}>
                  Communication Skills
                </Header>

                <CommunicationSection />

                <Header as="h3" dividing style={{ marginBottom: '1em', marginTop: '4em' }}>
                  Article Critique
                </Header>

                <CritiqueSection />

                <Header as="h3" dividing style={{ marginBottom: '1em', marginTop: '4em' }}>
                  Overall
                </Header>

                <OverallSection />

                <Button
                  type="submit"
                  fluid
                  style={{ marginTop: '1em' }}
                  loading={loading}
                  disabled={isSubmitting || !isValid}
                >
                  <Icon name="send" /> Submit Evaluation
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
      )}
    </CreateJournalClubComponent>
  );
};
