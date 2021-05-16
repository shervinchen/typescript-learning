{
  class Person {
    public readonly name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  const person = new Person('csd');
  console.log(person.name);
}

{
  abstract class Geom {
    width: number;
    getType() {
      return 'Gemo';
    }
    abstract getArea(): number;
  }

  class Circle extends Geom {
    radius: number;
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  class Square {}
  class Triangle {}

  interface Person {
    name: string;
  }
  interface Teacher extends Person {
    teachingAge: number;
  }
  interface Student extends Person {
    age: number;
  }
  const teacher = {
    name: 'csd',
    teachingAge: 20,
  };
  const student = {
    name: 'lee',
    age: 18,
  };
  const getUserInfo = (user: Person) => {
    console.log(user.name);
  };
  getUserInfo(teacher);
  getUserInfo(student);
}
