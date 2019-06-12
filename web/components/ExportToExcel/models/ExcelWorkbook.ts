import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { Sheet } from './Sheet';

export class ExcelWorkbook {
  private _name: string;
  private _workbook: XLSX.WorkBook;

  constructor(name: string, options?: XLSX.FullProperties) {
    const defaultWbOptions = {
      Title: 'Evaluations',
      CreatedDate: new Date(Date.now()),
    };

    this._name = name;
    this._workbook = XLSX.utils.book_new();
    this._workbook.Props = Object.assign({}, defaultWbOptions, options);
  }

  public appendWorksheet(sheet: Sheet) {
    const worksheet = XLSX.utils.aoa_to_sheet(sheet.construct());
    XLSX.utils.book_append_sheet(this._workbook, worksheet, sheet.name);
  }

  public saveFile(options?: XLSX.WritingOptions) {
    const defaultOptions = { bookType: 'xlsx', bookSST: true, type: 'binary' };
    const outFile = XLSX.write(this._workbook, Object.assign({}, options, defaultOptions));
    const buffer = this.stringToArrayBuffer(outFile);
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${this._name}.xlsx`);
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
