{
  // let input: [number, number] = [1, 2];
  // let [first, second] = input;

  // function f([first, second]: [number, number]) {
  //   console.log(first);
  //   console.log(second);
  // }
  // f(input);

  // let [first, ...rest] = [1, 2, 3, 4];

  // let o = {
  //   a: 'foo',
  //   b: 12,
  //   c: 'bar'
  // };
  // const { a, b } = o;
  // let { a: newName } = o;

  // function keepWholeObject(wholeObject: { a: string, b?: number; }) {
  //   let { a, b = 111 } = wholeObject;
  // }

  type C = { a: string, b?: number; };

  function f({ a = '', b = '' } = {}): void {

  }
  f({ a: 'yes' });
}