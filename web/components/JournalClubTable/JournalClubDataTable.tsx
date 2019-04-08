import React from 'react';
import Link from 'next/link';
import { Table } from 'semantic-ui-react';

import { JournalClub, OverallCompetencyFieldsFragment, User } from '../../generated/graphql';
import { formatCompetency } from '../../lib/formatters';
import { DataTable } from '../DataTable';

interface TableProps {
  journalClubs: ({ __typename?: 'JournalClub' } & Pick<
    JournalClub,
    'id' | 'article' | 'createdAt' | 'updatedAt'
  > & {
      resident: { __typename?: 'User' } & Pick<User, 'fullName'>;
      evaluator: { __typename?: 'User' } & Pick<User, 'fullName'>;
      preceptor: { __typename?: 'User' } & Pick<User, 'fullName'>;
      overall: { __typename?: 'OverallCompetency' } & OverallCompetencyFieldsFragment;
    })[];
}

export const JournalClubDataTable: React.FC<TableProps> = ({ journalClubs }) => {
  const headers = [
    'Article',
    'Resident',
    'Evaluator',
    'Preceptor',
    'Overall Score',
    'Created',
    'Review',
  ];

  return (
    <DataTable
      headers={headers}
      body={journalClubs.map(node => (
        <Table.Row key={node.id}>
          <Table.Cell textAlign="center">{node.article}</Table.Cell>
          <Table.Cell singleLine textAlign="center">
            {node.resident.fullName}
          </Table.Cell>
          <Table.Cell singleLine textAlign="center">
            {node.evaluator.fullName}
          </Table.Cell>
          <Table.Cell singleLine textAlign="center">
            {node.preceptor.fullName}
          </Table.Cell>
          <Table.Cell textAlign="center">{formatCompetency(node.overall.competency)}</Table.Cell>
          <Table.Cell textAlign="center">
            {new Date(node.createdAt).toLocaleDateString()}
          </Table.Cell>
          <Table.Cell textAlign="center">
            <Link href={`evaluation/journal-club?id=${node.id}`} passHref>
              <a href="#">Review</a>
            </Link>
          </Table.Cell>
        </Table.Row>
      ))}
    />
  );
};
