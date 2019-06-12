export class Timer {
  _id: number;

  _start: number;

  _remaining: number;

  _callback: Function;

  constructor(callback: Function, delay: number) {
    this._id = delay;
    this._start = delay;
    this._remaining = delay;
    this._callback = callback;

    this.resume();
  }

  clear() {
    clearTimeout(this._id);
  }

  pause() {
    clearTimeout(this._id);
    this._remaining -= Date.now() - this._start;
  }

  resume() {
    this._start = Date.now();
    clearTimeout(this._id);
    this._id = setTimeout(this._callback, this._remaining);
  }
}
