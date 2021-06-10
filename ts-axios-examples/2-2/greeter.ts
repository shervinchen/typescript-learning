{
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  interface Person {
    name: string;
    age: number;
  }

  function greeter(person: Person) {
    return `hello ${person}`;
  }

  // const user: Person = {
  //   name: 'csd',
  //   age: 18
  // };
  const user = new User('csd', 18);
  console.log(greeter(user));
}