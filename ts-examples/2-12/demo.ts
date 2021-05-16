{
  class Person {
    name = 'csd';
    getName() {
      return this.name;
    }
  }

  class Teacher extends Person {
    getTeacherName() {
      return 'teacher name';
    }
    getName() {
      return super.getName() + 'chen';
    }
  }

  const person = new Person();
  console.log(person.getName());

  const teacher = new Teacher();
  console.log(teacher.getName());
  console.log(teacher.getTeacherName());
}
