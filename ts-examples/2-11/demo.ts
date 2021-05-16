{
  // tsc --init
  interface Person {
    name: string;
    age?: number;
    readonly gender?: string;
    [propName: string]: any;
    say(): string;
  }

  interface Teacher extends Person {
    teach(): string;
  }

  interface SayHi {
    (word: string): string;
  }

  // type Person1 = string;

  const getPersonName = (person: Person): void => {
    console.log(person.name);
  };
  const setPersonName = (person: Teacher, name: string): void => {
    person.name = name;
  };

  const person = {
    name: 'csd',
    say() {
      return 'say hello';
    },
    teach() {
      return 'teach';
    },
  };
  getPersonName(person);
  setPersonName(person, 'lee');

  class User implements Person {
    name = 'csd';
    say() {
      return 'hello';
    }
  }

  const sayHi: SayHi = (word: string) => {
    return word;
  };
}
