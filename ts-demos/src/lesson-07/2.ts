{
  interface hasLength {
    length: number
  }

  function returnItHasLength<T extends hasLength>(sth: T): T {
    console.log(sth.length)
    return sth
  }

  function create<T>(c: { new (): T }) {
    return new c()
  }

  class Human {

  }

  let human = create<Human>(Human)
}