{
  abstract class Animal {
    abstract makeSound(): void;

    move(): void {
      console.log('roaming the earth...');
    }
  }
}

{
  abstract class Department {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    printName(): void {
      console.log(`Department name: ${this.name}`);
    }

    abstract printMeeting(): void;
  }

  class AccountingDepartment extends Department {
    constructor() {
      super('Accounting ad Auditing');
    }

    printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am');
    }

    generateReports(): void {
      console.log('Generating accounting reports...');
    }
  }

  let department: Department;
  department = new AccountingDepartment();
  department.printName();
  department.printMeeting();
}

{
  class Greeter {
    static standardGreeting = 'Hello, there';

    greeting: string;

    constructor(message?: string) {
      this.greeting = message;
    }

    greet() {
      if (this.greeting) {
        return `Hello, ${this.greeting}`;
      } else {
        return Greeter.standardGreeting;
      }
    }
  }

  let greeter: Greeter;
  greeter = new Greeter('world');
  console.log(greeter.greet());

  let greeterMaker: typeof Greeter = Greeter;
  greeterMaker.standardGreeting = 'Hey there';
  let greeter2: Greeter = new greeterMaker();
  console.log(greeter2.greet());
}

{
  class Point {
    x: number;
    y: number;
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = {
    x: 1,
    y: 2,
    z: 3
  };
}