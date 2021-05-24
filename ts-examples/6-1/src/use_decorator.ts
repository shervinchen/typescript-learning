{
  const userInfo: any = undefined

  function catchError(msg: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
      const fn = descriptor.value
      descriptor.value = function () {
        try {
          fn()
        } catch (error) {
          console.log(msg)
        }
      }
    }
  }

  class Test {
    @catchError('userInfo.name not exist')
    getName() {
      return userInfo.name
    }

    @catchError('userInfo.age not exist')
    getAge() {
      return userInfo.age
    }
  }

  const test = new Test()
  test.getName()
  test.getAge()
}