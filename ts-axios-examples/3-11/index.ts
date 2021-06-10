{
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  };
}

{
  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray = ['Bob', 'Fred'];
  let myStr: string = myArray[0];
}

{
  class Animal {
    name: string;
  }

  class Dog extends Animal {
    breed: string;
  }

  interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
  }
}

{
  interface NumberDictionary {
    [index: string]: number;
    length: number;
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
}