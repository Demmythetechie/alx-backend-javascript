class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sq) {
    if (typeof sq !== 'number') {
      throw new TypeError('sqft must be a number');
    } else {
      this._sqft = sq;
    }
  }
}

export default Building;
