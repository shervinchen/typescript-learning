{
  class Person {
    constructor(private _name: string) {}

    get name() {
      return this._name;
    }

    set name(name: string) {
      this._name = name;
    }
  }
  const person = new Person('csd');
  console.log(person.name);
  person.name = 'lee';

  class Demo {
    private static instance: Demo;
    private constructor(public name: string) {}

    static getInstance() {
      if (!this.instance) {
        this.instance = new Demo('csd');
      }
      return this.instance;
    }
  }

  const demo1 = Demo.getInstance();
  const demo2 = Demo.getInstance();
  console.log(demo1);
  console.log(demo2);
}
