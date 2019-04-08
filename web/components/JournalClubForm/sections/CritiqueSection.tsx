import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import { CompetencySelect } from '../../Select/CompetencySelect';
import { TextArea } from '../../TextArea';

const critique = [
  {
    title: 'Understanding',
    name: 'understanding',
    description:
      'Communicated an understanding of the impact of the study and its applicability to current pharmacy practice',
  },
  {
    title: 'Analysis',
    name: 'analysis',
    description: 'Draws valid conclusions through evaluation of the data',
  },
  {
    title: 'Application',
    name: 'application',
    description: 'Accurately analyzed the study, including any major strengths or deficiencies',
  },
  {
    title: 'Conclusions',
    name: 'conclusions',
    description:
      'Discussed the clinical application of the information presented during the presentation',
  },
];

export const CritiqueSection = () => {
  return (
    <Grid columns={2} style={{ height: '100%' }}>
      {critique.map(({ name, title, description }) => (
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
