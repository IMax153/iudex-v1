import React from 'react';
import Link from 'next/link';

import { JournalClub } from '../../generated/graphql';
import { Button } from '../Button';
import { Card, CardHeader, CardSection } from '../Card';
import { Stack } from '../Stack';
import { ReviewHeader } from './ReviewHeader';
import { ReviewSection } from './ReviewSection';

interface Props {
  evaluation: JournalClub;
}

export const JournalClubReview: React.FC<Props> = ({ evaluation }) => {
  const {
    article,
    evaluator,
    resident,
    preceptor,
    createdAt,
    background,
    methods,
    results,
    understanding,
    analysis,
    application,
    conclusions,
    clarity,
    organization,
    grammar,
    responseToQuestions,
    knowsAudience,
    audienceEngagement,
    overall,
  } = evaluation;

  const headerProps = {
    article,
    evaluator: evaluator.fullName,
    resident: resident.fullName,
    preceptor: preceptor.fullName,
    createdAt,
  };

  return (
    <Card>
      <CardHeader
        title="Journal Club Evaluation"
        actions={
          <Link href="/dashboard" passHref>
            <Button href="#" size="small">
              Back to Dashboard
            </Button>
          </Link>
        }
        subTitle={<ReviewHeader {...headerProps} />}
        headerSize="title1"
      />
      <CardSection>
        <Stack>
          <ReviewSection heading="Analytics" domains={{ background, methods, results }} />
          <ReviewSection
            heading="Analysis"
            domains={{ understanding, analysis, application, conclusions }}
          />
          <ReviewSection
            heading="Communication"
            domains={{
              clarity,
              organization,
              grammar,
              responseToQuestions,
              knowsAudience,
              audienceEngagement,
            }}
          />
          <ReviewSection heading="Overall" domains={{ overall } as any} />
        </Stack>
      </CardSection>
    </Card>
  );
};
