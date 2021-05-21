{
  function testDecorator(flag: boolean) {
    if (flag) {
      return function (constructor: any) {
        constructor.prototype.getName = () => {
          console.log('csdoker')
        }
      }
    } else {
      return function (constructor: any) { }
    }
    // console.log('decorator')
  }


  // function testDecorator1(constructor: any) {
  //   console.log('decorator1')
  // }

  @testDecorator(true)
  // @testDecorator1
  class Test {

  }

  const test = new Test();

  (test as any).getName()
}