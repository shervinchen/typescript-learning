{
  function accessorDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false
  }

  class Test {
    private _name: string

    constructor(name: string) {
      this._name = name
    }

    get name() {
      return this._name
    }

    @accessorDecorator
    set name(name: string) {
      this._name = name
    }
  }

  const test = new Test('csd')
  test.name = '123'
  console.log(test.name)
}