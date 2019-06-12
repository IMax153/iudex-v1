import React from 'react';
import Link from 'next/link';
import { Container, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';

import { User } from '../../generated/graphql';
import { HomeLayout } from './HomeLayout';

interface HomePageProps {
  user: Partial<User>;
}

export const HomePage: React.FC<HomePageProps> = ({ user }) => {
  return (
    <HomeLayout user={user}>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" textAlign="center" style={{ fontSize: '2em' }}>
                Create and Manage Evaluations
              </Header>
              <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
                We allow you to create and manage your resident evaluations in the cloud.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Header as="h2" icon>
                <Icon name="settings" />
                Simple, powerful workflows
                <Header.Subheader>
                  Create, manage, and analyze your evaluations with ease using our toolchain
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }} icon>
                <Icon name="lightning" />
                Supercharge your evaluation workflow today!
              </Header>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }} icon>
                <Icon name="database" />
                Export evaluations to Excel for easy data analysis
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Our Mission
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We aim to provide a high-quality, cloud-based user interface to simplify evaluation
            management. Our easily extensible software can accomodate any number of different types
            of evaluations.
          </p>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <Link href="/login" passHref>
              <a href="#">Get Started</a>
            </Link>
          </Divider>
        </Container>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Header as="h4" inverted>
            Please report issues and bugs to our team to we can ensure the best user experience.
          </Header>
        </Container>
      </Segment>
    </HomeLayout>
  );
};
