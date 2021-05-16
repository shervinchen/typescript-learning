{
  class Person {
    name: string;
    private age: number;
    protected gender = 'male';
    sayHi() {
      console.log('hi');
    }
    setAge(age) {
      this.age = age;
    }
  }

  class Teacher extends Person {
    public sayGender() {
      console.log(this.gender);
    }
  }

  const person = new Person();
  person.name = 'csd';
  console.log(person.name);
  person.sayHi();

  class Animal {
    // private name: string;

    // constructor(name: string) {
    //   this.name = name;
    // }
    constructor(public name: string) {}
  }
  const animal = new Animal('animal');

  class Dog extends Animal {
    constructor(public age: number) {
      super('dog');
    }
  }
  const dog = new Dog(28);
  console.log(dog.name);
  console.log(dog.age);
}
