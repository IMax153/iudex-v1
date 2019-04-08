import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import { CompetencySelect } from '../../Select/CompetencySelect';
import { TextArea } from '../../TextArea';

const analytics = [
  {
    title: 'Background',
    name: 'background',
    description:
      'Stated the study objectives and provided an appropriate rationale for the objectives and hypotheses',
  },
  {
    title: 'Methods',
    name: 'methods',
    description:
      'Clearly and concisely described the study design and its endpoints including, but not limited to: treatment administered, blinding, inclusion/exclusion criteria, statistics used and their appropriateness, and withdrawals and dropouts',
  },
  {
    title: 'Results',
    name: 'results',
    description: 'Reported study endpoints accurately using tables and graphs to emphasize points',
  },
];

export const AnalyticsSection = () => {
  return (
    <Grid columns={2} style={{ height: '100%' }}>
      {analytics.map(({ name, title, description }) => (
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

            <TextArea name={`${name}.comment`} />
          </div>
        </Grid.Column>
      ))}
    </Grid>
  );
};
