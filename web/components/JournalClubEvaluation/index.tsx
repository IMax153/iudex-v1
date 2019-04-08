import React from 'react';
import { Query } from 'react-apollo';
import { Dimmer, Loader } from 'semantic-ui-react';

import {
  JournalClubEvaluationQuery,
  JournalClubEvaluationQueryVariables,
  JournalClubEvaluationDocument,
} from '../../generated/graphql';
import { Evaluation } from './Evaluation';

interface JournalClubEvaluationProps {
  id: string;
}

export const JournalClubEvaluation: React.FC<JournalClubEvaluationProps> = ({ id }) => {
  return (
    <Query<JournalClubEvaluationQuery, JournalClubEvaluationQueryVariables>
      query={JournalClubEvaluationDocument}
      variables={{ where: { id } }}
    >
      {({ data, loading, error }) => {
        if (error) return <div>Error! {error.message}</div>;
        if (loading || !data || !data.journalClub) {
          return (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          );
        }

        return <Evaluation evaluation={data.journalClub} />;
      }}
    </Query>
  );
};
