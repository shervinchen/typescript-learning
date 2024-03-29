{
  function testDecorator() {
    return function <T extends new (...args: any[]) => any>(constructor: T) {
      return class extends constructor {
        name = 'csdoker'

        getName() {
          return this.name
        }
      }
    }
  }

  const Test = testDecorator()(class {
    name: string

    constructor(name: string) {
      this.name = name
    }
  })

  const test = new Test('csd')
  console.log(test.getName())
}