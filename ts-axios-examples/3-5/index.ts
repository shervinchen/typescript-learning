{
  // let hello = 'hello';

  // function f(input: boolean) {
  //   let a = 10;
  //   if (input) {
  //     let b = a + 1;
  //     return b;
  //   }
  //   // return b
  // }

  // try {
  //   throw 'oh';
  // } catch (error) {
  //   console.log('catch error');
  // }

  // function f(condition, x) {
  //   if (condition) {
  //     let x = 100;
  //     return x;
  //   }
  //   return x;
  // }
  // f(false, 0);
  // f(true, 0);

  function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      let currentRow = matrix[i];
      for (let i = 0; i < currentRow.length; i++) {
        sum += currentRow[i];
      }
    }
    return sum;
  }
  let matrix = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  console.log(sumMatrix(matrix));

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100 * i);
  }
}