{
  function hello() {}
  const hello2 = function () {};
  const hello3 = () => {};

  function add(first: number, second: number): number {
    return first + second;
  }
  const total = add(1, 2);

  function sayHello(): void {
    console.log("hello");
  }

  function errorEmitter(): never {
    // throw new Error();
    while (true) {}
    console.log(123);
  }

  function add2({ first, second }: { first: number; second: number }): number {
    return first + second;
  }
  const total2 = add2({ first: 1, second: 2 });

  function getNumber({ first }: { first: number }) {
    return first;
  }
  const count = getNumber({ first: 1 });
}
