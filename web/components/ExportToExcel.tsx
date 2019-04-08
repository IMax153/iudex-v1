import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { flatten, isObject, omit, map, pipe, values } from 'lodash/fp';

import { ExcelWorkbook } from '../lib/excel';

interface ExportToExcelProps {
  columns: any[];
  fileName?: string;
  sheetName?: string;
  getData: () => Promise<any[]>;
}

const formatData = pipe(
  omit(['__typename']),
  map(v => (isObject(v) ? values(omit(['__typename'])(v)) : v)),
  flatten,
);

export const ExportToExcel: React.FC<ExportToExcelProps> = ({
  columns,
  fileName,
  sheetName,
  getData,
}) => {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const data = await getData();
    const excelData = data.map((v: any) => formatData(v)) as any[][];
    const workbook = new ExcelWorkbook(columns, excelData);
    workbook.appendWorksheet(sheetName || 'Data');
    workbook.saveFileAs(`${fileName}.xlsx` || 'data.xlsx');
    setLoading(false);
  }

  return (
    <Button onClick={handleClick} loading={loading}>
      <Icon name="cloud download" style={{ marginRight: '10px' }} />
      Export to Excel
    </Button>
  );
};
