export class Cell {
  private _value: string | number | undefined | null = null;

  constructor(value: string | number | undefined | null) {
    this._value = value;
  }

  public get value() {
    return this._value;
  }

  public set value(value: string | number | undefined | null) {
    this._value = value;
  }
}
