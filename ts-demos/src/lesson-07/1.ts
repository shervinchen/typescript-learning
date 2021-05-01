{
  function returnIt<T>(sth: T): T {
    return sth
  }

  let str: string = returnIt<string>('hi')

  interface Human {
    name: string
    age: number
  }

  let human = returnIt<Human>({
    name: 'csdoker',
    age: 18
  })

  function returnArray<T>(array: T[]): T[] {
    return array
  }

  let arr1 = returnArray([1, 2, 3])
  let arr2: Array<Human> = returnArray<Human>([
    {
      name: 'csdoker',
      age: 18
    }
  ])

  let stringArr: Array<string> = ['a', 'b']

  let myReturnIt: <T>(sth: T) => T = returnIt

  interface add {
    (a: number, b: number): number
  }
  interface anyAdd<T> {
    (a: T, b: T): T
  }

  let numAdd: add = (a: number, b: number) => {
    return a + b
  }
  let strAdd: anyAdd<string> = (a: string, b: string): string => {
    return a + b
  }
}