export class Result<T> {
  public static ok<U>(value: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }

  public static combine(results: Result<any>[]): Result<any> {
    results.forEach(result => {
      if (result.failed) return result;
    });
    return Result.ok(results);
  }

  public succeeded: boolean;
  public failed: boolean;
  public error?: string;
  private _value?: T;

  public get value(): T {
    if (!this.succeeded) {
      console.log(this.error);
      throw new Error('Cant retrieve the value from a failed result.');
    }

    if (!this._value) {
      throw new Error('Cannot retrieve undefined value');
    }

    return this._value;
  }

  private constructor(succeeded: boolean, error?: string, value?: T) {
    if (succeeded && error) {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }
    if (!succeeded && !error) {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.succeeded = succeeded;
    this.failed = !succeeded;
    this.error = error;
    this._value = value;

    Object.freeze(this);
  }
}
