{
  function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key)
    // descriptor.writable = false
    descriptor.value = function () {
      return 'decorator'
    }
  }

  class Test {
    name: string

    constructor(name: string) {
      this.name = name
    }

    @getNameDecorator
    getName() {
      return this.name
    }
  }

  const test = new Test('csd')
  // test.getName = () => {
  //   return '123'
  // }
  console.log(test.getName())
}