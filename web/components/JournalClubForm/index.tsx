import React from 'react';
import { Formik, Form } from 'formik';
import reduce from 'lodash/reduce';

import {
  CreateJournalClubComponent,
  User,
  JournalClubsDocument,
  JournalClubOrderByInput,
} from '../../generated/graphql';
import { redirect } from '../../lib/browser/redirect';
import { Button } from '../Button';
import { Card, CardSection } from '../Card';
import { CompetencySection } from './CompetencySection';
import { DetailsSection } from './DetailsSection';
import { Stack } from '../Stack';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import {
  analyticsSections,
  communicationSections,
  critiqueSections,
  overallSections,
} from './sections';

interface Props {
  user: Partial<User>;
}

const coreCompetencies = [
  { label: 'Needs Improvement', value: 'NEEDS_IMPROVEMENT' },
  { label: 'Satisfactory Progress', value: 'SATISFACTORY_PROGRESS' },
  { label: 'Achieved', value: 'ACHIEVED' },
  { label: 'Not Applicable', value: 'NOT_APPLICABLE' },
];

const overallCompetencies = [
  { label: 'Meets Expectations', value: 'MEETS_EXPECTATIONS' },
  {
    label: 'Does Not Meet Expectations',
    value: 'DOES_NOT_MEET_EXPECTATIONS',
  },
];

const formatData = (data: Record<string, any>) => {
  return reduce(
    data,
    (result, value, key) => {
      return { ...result, [key]: { create: value } };
    },
    {},
  );
};

export const JournalClubForm: React.FC<Props> = ({ user }) => {
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
                    ...(formatData(data) as any),
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
          {({ isSubmitting, isValid }) => (
            <Form autoComplete="off">
              <Card>
                <CardSection>
                  <DetailsSection heading="Details" />
                </CardSection>

                <CardSection>
                  <CompetencySection
                    heading="Analytical Skills"
                    sections={analyticsSections}
                    options={coreCompetencies}
                  />
                </CardSection>

                <CardSection>
                  <CompetencySection
                    heading="Communication Skills"
                    sections={communicationSections}
                    options={coreCompetencies}
                  />
                </CardSection>

                <CardSection>
                  <CompetencySection
                    heading="Article Critique"
                    sections={critiqueSections}
                    options={coreCompetencies}
                  />
                </CardSection>

                <CardSection>
                  <Stack spaceAfter="largest">
                    <CompetencySection
                      heading="Overall Evaluation"
                      sections={overallSections}
                      options={overallCompetencies}
                    />

                    <Button
                      type="primary"
                      loading={loading}
                      disabled={!isValid || isSubmitting}
                      submit
                      block
                    >
                      Submit Evaluation
                    </Button>
                  </Stack>
                </CardSection>
              </Card>
            </Form>
          )}
        </Formik>
      )}
    </CreateJournalClubComponent>
  );
};
