import React from 'react';
import { Field, FieldProps } from 'formik';
import { Grid, Header } from 'semantic-ui-react';

import { InputField } from '../../InputField';
import { UserSelect } from '../../Select/UserSelect';
import { Position } from '../../../generated/graphql';

export const DetailsSection = () => {
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h3" textAlign="center" color="teal" content="Article Title" />
          <Field
            name="article"
            render={(formikProps: FieldProps) => (
              <InputField icon="user" iconPosition="left" placeholder="Article" {...formikProps} />
            )}
          />
        </Grid.Column>

        <Grid.Column>
          <Header as="h3" textAlign="center" color="teal" content="Select Precepting Pharmacist" />
          <UserSelect name="preceptor" position={Position.Pharmacist} />
        </Grid.Column>

        <Grid.Column>
          <Header as="h3" textAlign="center" color="teal" content="Select Presenting Resident" />
          <UserSelect name="resident" position={Position.Resident} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
