/**
 * defn: a class is a blueprint to create an obj with some fields and methods to represent something
 */

class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
  drive(): void {
    console.log("vroom vroom");
  }

  honk(): void {
    console.log("beep");
  }
}

/**
 * instead of writing the line like this.color = color and so on ...
 * we could just do this
 * constructor(public color: string) {}
 */

// understanding the inheritence system
// if were extending a class, and say we have a fn called drive(), if it is public in the parent, it has to be public in the child
// the access specifier cannot be different in parent-child for the same fn

/**
 * now when dealing with constructors in child classes, a small note to remember
 * we need call super() in the constructor and pass whatever params it needs to it
 *
 */

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }
  drive(): void {
    console.log("vroom vroom vroom");
  }
}

/**
 * modifiers:
 * public: this method can be called anywhere, anytime
 * private: this methods can only be called by other methods in the SAME class
 * protected: this method can be called by other methods in THIS class, or by other methods in child classes
 */

const vehicle = new Car("orange", 4);
console.log(vehicle.color);
vehicle.drive();
vehicle.honk();
