{
  function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
      return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
      return padding + value;
    }
    throw new Error(`Expected string or number got ${padding}`);
  }
  padLeft('Hello world', 4);
}

{
  //   interface Bird {
  //     fly();
  //     layEggs();
  //   }

  //   interface Fish {
  //     swim();
  //     layEggs();
  //   }

  //   function getSmallPet(): Fish | Bird {
  //     return;
  //   }

  //   let pet = getSmallPet();
  //   if (isFish(pet)) {
  //     pet.swim();
  //   } else {
  //     pet.fly();
  //   }
  //   // pet.layEggs();
  //   // console.log((pet as Fish).swim());
  //   // console.log((pet as Bird).fly());

  //   function isFish(pet: Fish | Bird): pet is Fish {
  //     return (pet as Fish).swim !== undefined;
  //   }
  // }

  // {
  //   function isNumber(x: any): x is number {
  //     return typeof x === 'number';
  //   }

  //   function isString(x: any): x is string {
  //     return typeof x === 'string';
  //   }

  //   function padLeft2(value: string, padding: string | number) {
  //     if (isNumber(padding)) {
  //       return Array(padding + 1).join(' ') + value;
  //     }
  //     if (isString(padding)) {
  //       return padding + value;
  //     }
  //     throw new Error(`Expected string or number got ${padding}`);
  //   }
}

{
  class Bird {
    fly() {

    }
    layEggs() { }
  }

  class Fish {
    swim() { }
    layEggs() { }
  }

  function getRandomPet(): Fish | Bird {
    return Math.random() > 0.5 ? new Bird() : new Fish();
  }

  let pet = getRandomPet();

  if (pet instanceof Bird) {
    pet.fly();
  }

  if (pet instanceof Fish) {
    pet.swim();
  }
}