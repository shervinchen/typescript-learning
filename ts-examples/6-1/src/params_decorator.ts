{
  function paramDecorator(target: any, key: string, paramIndex: number) {
    console.log(target, key, paramIndex)
  }

  class Test {
    getInfo(@paramDecorator name: string, age: number) {
      console.log(name, age)
    }
  }

  const test = new Test()
  test.getInfo('csd', 18)
}