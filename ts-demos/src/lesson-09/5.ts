{
  function fn(this: string | void, number: number) {
    console.log(number)
  }
  fn(1)
  fn.call('string', 1)
}