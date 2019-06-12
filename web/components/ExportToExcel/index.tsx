import React, { useState } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { ExcelWorkbook, Sheet } from './models';

interface ExportToExcelProps {
  fileName: string;
  getSheets: () => Promise<Sheet[]>;
}

export const ExportToExcel: React.FC<ExportToExcelProps> = ({ fileName, getSheets }) => {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    const sheets = await getSheets();
    const workbook = new ExcelWorkbook(fileName);

    sheets.forEach(sheet => {
      workbook.appendWorksheet(sheet);
    });

    workbook.saveFile();

    setLoading(false);
  }

  return (
    <Button
      type="secondary"
      icon={<Icon icon="cloud-download-alt" size="medium" color="secondary" />}
      loading={loading}
      onClick={handleClick}
      block
    >
      Export to Excel
    </Button>
  );
};

export * from './models';
