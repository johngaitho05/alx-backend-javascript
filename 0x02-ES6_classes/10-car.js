class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  get brand() {
    // eslint-disable-next-line no-underscore-dangle
    return this._brand;
  }

  get motor() {
    // eslint-disable-next-line no-underscore-dangle
    return this._motor;
  }

  get color() {
    // eslint-disable-next-line no-underscore-dangle
    return this._color;
  }

  cloneCar() {
    // Create a new instance of the TestCar class with the same attribute values
    return new this.constructor(this.brand, this.motor, this.color);
  }
}

export default Car;
