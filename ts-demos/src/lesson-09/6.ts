{
  const calender = (options: CalenderOptions) => {}

  interface CalenderOptions {
    [key: string]: any
  }

  calender({
    time: Date.now,
    view: 'year',
  })

  interface Person {
    name: string
    age: number
    grade: number
  }

  type X = keyof Person

  function pluck<T, K extends keyof T>(object: T, keys: Array<K>): T[K][] {
    return keys.map(key => object[key])
  }

  pluck(
    {
      name: 'csdoker',
      age: 18,
      grade: 100,
    },
    ['name', 'age']
  )
}
