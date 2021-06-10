{
  function add(x: number, y: number): number {
    return x + y;
  }

  let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y;
  };

  let z = 100;

  function addToZ(x, y) {
    return x + y + z;
  }
}