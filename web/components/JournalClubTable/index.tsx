import React, { useState } from 'react';
import Link from 'next/link';

import { Stack } from 'web/components/Stack';
import { User, JournalClubsComponent, JournalClubOrderByInput } from '../../generated/graphql';
import { formatCompetency } from '../../lib/utils';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { DataTable } from '../DataTable';
import { Grid } from '../Grid';
import { Loading } from '../Loading';
import { Stepper } from '../Stepper';
import { TableCell } from '../Table';
import { JournalClubDataExport } from './JournalClubDataExport';

interface Props {
  displayAmount?: number;
  user: Partial<User>;
}

export const JournalClubTable: React.FC<Props> = ({ displayAmount = 5, user }) => {
  const [page, setPage] = useState(1);

  return (
    <JournalClubsComponent
      variables={{
        first: displayAmount,
        skip: (page - 1) * displayAmount,
        orderBy: JournalClubOrderByInput.CreatedAt_Desc,
        where: {
          OR: [{ evaluator: { id: user.id } }, { preceptor: { id: user.id } }],
        },
      }}
    >
      {({ data, loading, error }) => {
        if (error) return <Alert type="critical">{error.message}</Alert>;

        if (
          loading ||
          !data ||
          !data.journalClubsConnection ||
          !data.journalClubsConnection.aggregate ||
          !data.journalClubsConnection.pageInfo ||
          !data.journalClubsConnection.edges
        ) {
          return <Loading />;
        }

        if (data.journalClubsConnection.edges.length === 0) {
          return (
            <Alert type="info" title="You have no evaluations">
              Head over to the forms page to start creating evaluations!
            </Alert>
          );
        }

        const totalCount = Math.ceil(data.journalClubsConnection.edges.length / displayAmount);

        return (
          <Stack spaceAfter="large">
            <DataTable
              headers={[
                'Article',
                'Resident',
                'Evaluator',
                'Preceptor',
                'Overall Score',
                'Created',
                'Review',
              ]}
              records={data.journalClubsConnection.edges.map(({ node }) => {
                return {
                  id: node.id,
                  data: (
                    <React.Fragment>
                      <TableCell>{node.article}</TableCell>
                      <TableCell bolded={user.fullName === node.resident.fullName}>
                        {node.resident.fullName}
                      </TableCell>
                      <TableCell bolded={user.fullName === node.evaluator.fullName}>
                        {node.evaluator.fullName}
                      </TableCell>
                      <TableCell bolded={user.fullName === node.preceptor.fullName}>
                        {node.preceptor.fullName}
                      </TableCell>
                      <TableCell>{formatCompetency(node.overall.competency)}</TableCell>
                      <TableCell>{new Date(node.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Link
                          href={{
                            pathname: 'evaluation/journal-club',
                            query: { id: node.id },
                          }}
                          as="evaluation/journal-club"
                          passHref
                        >
                          <Button href="#" type="primary">
                            Review
                          </Button>
                        </Link>
                      </TableCell>
                    </React.Fragment>
                  ),
                };
              })}
            />
            <Grid columns="repeat(4, 1fr)" centerContent>
              <Stepper
                defaultValue={page}
                minValue={1}
                maxValue={totalCount}
                onChange={value => setPage(Number(value))}
              />
              <div />
              <div />
              <JournalClubDataExport user={user} />
            </Grid>
          </Stack>
        );
      }}
    </JournalClubsComponent>
  );
};
