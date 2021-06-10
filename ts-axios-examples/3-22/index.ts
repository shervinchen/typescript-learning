{
  let x = 3;
  let y = [0, 1, null];

  class Animal {
    numLegs: number;
  }

  class Bee extends Animal {

  }

  class Lion extends Animal {

  }

  let zoo: Animal[] = [new Bee(), new Lion()];

  function createZoo(): Animal[] {
    return [new Bee(), new Lion()];
  }
}

{
  window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.clickTime);
  };
}