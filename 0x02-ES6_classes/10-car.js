// eslint-disable-next-line no-underscore-dangle
const _brand = Symbol('brand');
// eslint-disable-next-line no-underscore-dangle
const _motor = Symbol('motor');
// eslint-disable-next-line no-underscore-dangle
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this[_brand] = brand;
    // eslint-disable-next-line no-underscore-dangle
    this[_motor] = motor;
    // eslint-disable-next-line no-underscore-dangle
    this[_color] = color;
  }

  // Getter for 'brand'
  get brand() {
    // eslint-disable-next-line no-underscore-dangle
    return this[_brand];
  }

  // Getter for 'motor'
  get motor() {
    // eslint-disable-next-line no-underscore-dangle
    return this[_motor];
  }

  // Getter for 'color'
  get color() {
    // eslint-disable-next-line no-underscore-dangle
    return this[_color];
  }

  // Method to clone the car
  cloneCar() {
    // Create a new instance of the class with the same attribute values
    // eslint-disable-next-line no-underscore-dangle
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}
