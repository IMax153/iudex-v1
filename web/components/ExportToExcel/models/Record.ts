import { Cell } from './Cell';

export abstract class Record {
  private _cells: Cell[] = [];

  public addCell(cell: Cell) {
    this._cells.push(cell);
  }

  public removeCell(cell: Cell) {
    this._cells.filter(c => c !== cell);
  }

  public cellCount() {
    return this._cells.length;
  }

  public cellValues() {
    return this._cells.map(cell => cell.value);
  }
}
