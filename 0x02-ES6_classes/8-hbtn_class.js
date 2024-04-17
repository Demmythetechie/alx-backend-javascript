class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    let result = null;
    if (hint === 'string') {
      result = this._location;
    } else if (hint === 'number') {
      result = this._size;
    } else {
      result = null;
    }
    return result;
  }

  toString() {
    return this._location;
  }
}

export default HolbertonClass;
