// import $ from 'jquery'

// {
//   $(function () {
//     $('body').html('<div>123</div>')
//     new $.fn.init()
//   })
// }

{
  interface Person {
    name: string
    age: number
    gender: string
  }
  class Teacher {
    constructor(private info: Person) { }

    getInfo<T extends keyof Person>(key: T): Person[T] {
      return this.info[key]
    }
  }

  const teacher = new Teacher({
    name: 'csd',
    age: 18,
    gender: 'male'
  })

  const test = teacher.getInfo('name')
  console.log(test)
}