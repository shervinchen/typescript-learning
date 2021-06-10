{
  function extend<T, U>(first: T, second: U): T & U {
    let result = {} as T & U;

    for (let id in first) {
      result[id] = first[id] as any;
    }

    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        result[id] = second[id] as any;
      }
    }

    return result;
  }

  class Person {
    constructor(public name: string) {

    }
  }

  interface Loggable {
    log(): void;
  }

  class ConsoleLogger implements Loggable {
    log() {

    }
  }

  const jim = extend(new Person('jim'), new ConsoleLogger());
  jim.name;
  jim.log();
}