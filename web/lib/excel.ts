import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

type StringOrNumberArray = (string | number)[];
type ExcelColumn = StringOrNumberArray;
type ExcelData = StringOrNumberArray;

export class ExcelWorkbook {
  private data: ExcelData[];
  private workbook: XLSX.WorkBook;

  constructor(columns: ExcelColumn, data: ExcelData[], options?: XLSX.FullProperties) {
    this.data = [columns, ...data];

    const defaultWbOptions = {
      Title: 'Evaluations',
      CreatedDate: new Date(Date.now()),
    };

    this.workbook = XLSX.utils.book_new();
    this.workbook.Props = Object.assign({}, defaultWbOptions, options);
  }

  public appendWorksheet(sheetName: string = 'New Sheet') {
    const worksheet = XLSX.utils.aoa_to_sheet(this.data);
    XLSX.utils.book_append_sheet(this.workbook, worksheet, sheetName);
  }

  public saveFileAs(sheetName: string = 'evaluations.xlsx', options?: XLSX.WritingOptions) {
    const defaultOptions = { bookType: 'xlsx', bookSST: true, type: 'binary' };
    const outFile = XLSX.write(this.workbook, Object.assign({}, options, defaultOptions));
    const buffer = this.stringToArrayBuffer(outFile);
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), sheetName);
  }

  private stringToArrayBuffer(s: any) {
    const buffer = new ArrayBuffer(s.length);
    const view = new Uint8Array(buffer);

    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff; // eslint-disable-line no-bitwise
    }

    return buffer;
  }
}
