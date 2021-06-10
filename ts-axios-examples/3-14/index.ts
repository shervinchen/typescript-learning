{
  class Animal {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m`);
    }
  }

  class Rhino extends Animal {
    constructor() {
      super('Rhino');
    }
  }

  class Employee {
    private name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  let animal = new Animal('Goat');
  let rhino = new Rhino();
  let employee = new Employee('Bob');

  animal = rhino;
}

{
  class Person {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
  }

  let howard = new Employee('Howard', 'Sales');
  console.log(howard.getElevatorPitch());
}

{
  class Person {
    constructor(readonly name: string) { }
  }
  let john = new Person('John');
  console.log(john.name);
}