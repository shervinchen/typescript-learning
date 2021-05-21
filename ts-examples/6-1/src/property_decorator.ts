{
  // function nameDecorator(target: any, key: string): any {
  //   const descriptor: PropertyDescriptor = {
  //     writable: false
  //   }
  //   return descriptor
  // }

  function nameDecorator(target: any, key: string): any {
    target[key] = '111'
  }

  class Test {
    @nameDecorator
    name = 'csd'
  }

  const test = new Test()
  test.name = '123'
  console.log((test as any).__proto__.name)
}