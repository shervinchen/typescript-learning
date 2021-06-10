{
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      return `Hello ${this.greeting}`;
    }
  }
  let greeter = new Greeter('World');
  greeter.greet();
}

{
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance},`);
    }
  }

  class Dog extends Animal {
    bark() {
      console.log('Woof! Woof!');
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }

    move(distance: number = 5) {
      console.log('Slithering...');
      super.move(distance);
    }
  }

  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }

    move(distance: number = 45) {
      console.log('Galloping...');
      super.move(distance);
    }
  }

  const dog = new Dog('dog');
  dog.bark();
  dog.move(10);

  let sam = new Snake('Sammy');
  let tom: Animal = new Horse('Tommy');
  sam.move();
  tom.move();
}