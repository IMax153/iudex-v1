import React from 'react';

import { Table, TableHead, TableBody, TableRow, TableCell } from '../Table';

interface Record {
  id: string;
  data: React.ReactNode;
}

interface Props {
  headers?: string[];
  records: Record[];
}

export const DataTable: React.FC<Props> = ({ headers, records }) => {
  return (
    <Table>
      {headers && (
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell key={`TableHeader:${header}`}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}

      <TableBody>
        {records.map(({ id, data }) => (
          <TableRow key={`TableRow:${id}`}>{data}</TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
