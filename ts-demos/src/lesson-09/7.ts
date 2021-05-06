{
  interface Person {
    name: string
    age: number
  }

  // interface ReadonlyPerson {
  //   readonly name: string
  //   readonly age: number
  // }

  type ReadonlyPerson = Readonly<Person>

  const person: ReadonlyPerson = {
    name: 'csdoker',
    age: 18
  }
}