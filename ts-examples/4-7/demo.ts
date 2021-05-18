{
  interface Item {
    name: string
  }

  class DataManager<T extends Item> {
    constructor(private data: T[]) { }

    getItem(index: number): T {
      return this.data[index]
    }

    getItemName(index: number): string {
      return this.data[index].name
    }
  }

  const data = new DataManager([{
    name: 'csd'
  }])
  data.getItem(0)
}

{
  interface Person {
    name: string
  }

  class DataManager<T extends number | string> {
    constructor(private data: T[]) { }

    getItem(index: number): T {
      return this.data[index]
    }
  }

  const data = new DataManager<string>(['1'])
}

{
  function hello<T>(param: T) {
    return param
  }

  const func: <T>(param: T) => T = hello
}