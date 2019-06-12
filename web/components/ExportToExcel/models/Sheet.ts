import { Result } from '../../../lib/common';
import { Record } from './Record';

export class Sheet {
  public static create(columns: string[], records: Record[], name?: string) {
    if (!Sheet.isValid(columns, records)) {
      return Result.fail<Sheet>('There must be a header for each record');
    }
    return Result.ok<Sheet>(new Sheet(columns, records, name));
  }

  public static isValid(columns: string[], records: Record[]) {
    return records.every(record => record.cellCount() === columns.length);
  }

  private _columns: string[];
  private _records: Record[];
  private _name: string = 'Data';

  public construct() {
    return [this._columns, ...this._records.map(record => record.cellValues())];
  }

  public get name() {
    return this._name;
  }

  private constructor(columns: string[], records: Record[], name?: string) {
    this._columns = columns;
    this._records = records;
    if (name) this._name = name;
  }
}
