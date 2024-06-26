class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    if (!students.join()) {
      throw new TypeError('Students must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = len;
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!students.join()) {
      throw new TypeError('Students must be an array');
    } else {
      this._students = students;
    }
  }
}

export default HolbertonCourse;
