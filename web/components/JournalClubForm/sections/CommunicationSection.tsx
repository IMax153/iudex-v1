import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import { CompetencySelect } from '../../Select/CompetencySelect';
import { TextArea } from '../../TextArea';

const communication = [
  {
    title: 'Clarity',
    name: 'clarity',
    description: 'Communicated clearly when speaking',
  },
  {
    title: 'Organization',
    name: 'organization',
    description: 'Organized all written or oral communication in a logical manner',
  },
  {
    title: 'Grammar',
    name: 'grammar',
    description:
      'Used correct grammar, punctuation, spelling, style, and formatting conventions in preparing all written communication',
  },
  {
    title: 'Responses',
    name: 'responseToQuestions',
    description:
      'Answered questions logically, and the accuracy of answers provided corresponded with the expected competency',
  },
  {
    title: 'Audience',
    name: 'knowsAudience',
    description: 'Targeted all communication to a level appropriate for the audience',
  },
  {
    title: 'Engagement',
    name: 'audienceEngagement',
    description: 'Engaged the audience and facilitated group discussion',
  },
];

export const CommunicationSection = () => {
  return (
    <Grid columns={2} style={{ height: '100%' }}>
      {communication.map(({ name, title, description }) => (
        <Grid.Column key={name}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Header as="h3" color="teal" content={title} />

            <CompetencySelect name={`${name}.competency`} />

            <p style={{ padding: '0.2em', marginTop: '0.5em', flex: 1 }}>{description}</p>

            <TextArea name={`${name}.comment`} label="Comment" />
          </div>
        </Grid.Column>
      ))}
    </Grid>
  );
};
