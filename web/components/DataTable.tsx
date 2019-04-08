import React from 'react';
import { Table } from 'semantic-ui-react';

interface DataTableProps {
  body: React.ReactNode;
  headers: string[];
}

export const DataTable: React.FC<DataTableProps> = ({ body, headers }) => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          {headers.map(header => (
            <Table.HeaderCell key={`DataTable:${header}`} textAlign="center">
              {header}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>{body}</Table.Body>
    </Table>
  );
};
