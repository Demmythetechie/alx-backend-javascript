class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a String');
    } else {
      this._name = nm;
    }
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    if (typeof cd !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = cd;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
