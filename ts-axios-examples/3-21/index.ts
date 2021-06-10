{
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };

  let stringNumeric = new GenericNumber<string>();
  stringNumeric.zeroValue = '';
  stringNumeric.add = function (x, y) {
    return x + y;
  };

  console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));
}

{
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  loggingIdentity({ length: 1 });
}

{
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };
  getProperty(x, 'a');
}

{
  function create<T>(c: { new(): T; }): T {
    return new c();
  }
}

{
  class BeeKeeper {
    hasMask: boolean;
  }

  class LionKeeper {
    nameTag: string;
  }

  class Animal {
    numLengths: number;
  }

  class Bee extends Animal {
    keeper: BeeKeeper;
  }

  class Lion extends Animal {
    keeper: LionKeeper;
  }

  function createInstance<T extends Animal>(c: new () => T): T {
    return new c();
  }

  createInstance(Lion).keeper.nameTag;
  createInstance(Bee).keeper.hasMask;
}