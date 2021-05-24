import 'reflect-metadata'

{
  const user = {
    name: 'csd'
  }
  Reflect.defineMetadata('data', 'test', 'user')
  console.log(Reflect.getMetadata('data', user))

  @Reflect.metadata('data', 'test')
  class User {
    name = 'csd'

    getName() { }
  }

  class Teacher extends User {
    @Reflect.metadata('data', 'test')
    getName() { }
  }

  console.log(Reflect.getMetadata('data', User))
  console.log(Reflect.hasMetadata('data', Teacher.prototype, 'getName'))
  console.log(Reflect.getMetadataKeys(Teacher.prototype, 'getName'))
}

{
  function showData(target: typeof User) {
    for (let key in target.prototype) {
      const data = Reflect.getMetadata('data', target.prototype, key)
      console.log(data)
    }
  }

  function setData(dataKey: string, msg: string) {
    return function (target: User, key: string) {
      Reflect.defineMetadata(dataKey, msg, target, key)
    }
  }

  @showData
  class User {
    @Reflect.metadata('data', 'name')
    getName() { }

    @Reflect.metadata('data', 'age')
    getAge() { }

    @setData('data', 'gender')
    getGender() { }
  }
}