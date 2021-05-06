{
  interface Person {
    name: string
    age: number
  }

  interface Person2 {
    name?: string
    age?: number
  }

  type Person3 = Partial<Person>
  type Person4 = Required<Person3>
}