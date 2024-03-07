export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'name');
    this._validateNumber(length, 'length');
    this._validateArray(students, 'students');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateString(newName, 'name');
    this._name = newName;
  }

  // Getter and Setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._validateNumber(newLength, 'length');
    this._length = newLength;
  }

  // Getter and Setter for 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._validateArray(newStudents, 'students');
    this._students = newStudents;
  }

  // Helper function to validate string
  _validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new Error(`${propertyName} must be a string`);
    }
  }

  // Helper function to validate number
  _validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new Error(`${propertyName} must be a number`);
    }
  }

  // Helper function to validate array
  _validateArray(value, propertyName) {
    if (!Array.isArray(value)) {
      throw new Error(`${propertyName} must be an array`);
    }
  }
}
