import React, { Fragment } from 'react';
import { Header, Card, Divider } from 'semantic-ui-react';
import { capitalize, pick, snakeCase, toPairs } from 'lodash';

import { JournalClubFieldsFragment } from '../../generated/graphql';
import { formatCompetency, formatCompetencyKey } from '../../lib/formatters';

interface EvaluationProps {
  evaluation: {
    __typename?: 'JournalClub';
  } & JournalClubFieldsFragment;
}

export const Evaluation: React.FC<EvaluationProps> = ({ evaluation }) => {
  const { article, resident, evaluator, preceptor, createdAt, updatedAt, ...data } = evaluation;
  const analyticalSkills = pick(data, ['background', 'methods', 'results']);
  const communicationSkills = pick(data, [
    'clarity',
    'organization',
    'grammar',
    'responseToQuestions',
    'knowsAudience',
    'audienceEngagement',
  ]);
  const critiqueSkills = pick(data, ['understanding', 'analysis', 'application', 'conclusions']);

  return (
    <Fragment>
      <Header as="h3" color="blue" content="Evaluation Details" />

      <Divider />

      <Card.Group itemsPerRow={4}>
        <Card header="Article" description={article} />
        <Card header="Resident" description={resident.fullName} />
        <Card header="Preceptor" description={preceptor.fullName} />
        <Card header="Evaluator" description={evaluator.fullName} />
      </Card.Group>

      <Header as="h3" color="blue" content="Analytical Skills" />

      <Divider />

      <Card.Group itemsPerRow={3}>
        {toPairs(analyticalSkills).map(skill => {
          const header = capitalize(snakeCase(skill[0]).replace('_', ' '));
          const { competency, comment } = skill[1];

          return (
            <Card
              key={header}
              header={header}
              meta={formatCompetency(competency)}
              description={comment}
            />
          );
        })}
      </Card.Group>

      <Header as="h3" color="blue" content="Communication Skills" />

      <Divider />

      <Card.Group itemsPerRow={3}>
        {toPairs(communicationSkills).map(skill => {
          const header = formatCompetencyKey(skill[0]);
          const { competency, comment } = skill[1];

          return (
            <Card
              key={header}
              header={header}
              meta={formatCompetency(competency)}
              description={comment}
            />
          );
        })}
      </Card.Group>

      <Header as="h3" color="blue" content="Critique Skills" />

      <Divider />

      <Card.Group itemsPerRow={3}>
        {toPairs(critiqueSkills).map(skill => {
          const header = formatCompetencyKey(skill[0]);
          const { competency, comment } = skill[1];

          return (
            <Card
              key={header}
              header={header}
              meta={formatCompetency(competency)}
              description={comment}
            />
          );
        })}
      </Card.Group>

      <Header as="h3" color="blue" content="Overall Score" />

      <Divider />

      <Card.Group itemsPerRow={3}>
        <Card
          header="Overall"
          meta={formatCompetency(data.overall.competency)}
          description={data.overall.comment}
        />
      </Card.Group>
    </Fragment>
  );
};
