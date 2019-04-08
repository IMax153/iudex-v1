import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import { CompetencySelect } from '../../Select/CompetencySelect';
import { TextArea } from '../../TextArea';

const overall = [
  {
    title: 'Overall Evaluation',
    name: 'overall',
    description: "Overall evaluation of the resident's journal club presentation",
  },
];

export const OverallSection = () => {
  return (
    <Grid columns={2} style={{ height: '100%' }}>
      {overall.map(({ name, title, description }) => (
        <Grid.Column key={name}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Header as="h3" color="teal" content={title} />

            <CompetencySelect name={`${name}.competency`} type="overall" />

            <p style={{ padding: '0.2em', marginTop: '0.5em', flex: 1 }}>{description}</p>

            <TextArea name={`${name}.comment`} />
          </div>
        </Grid.Column>
      ))}
    </Grid>
  );
};
