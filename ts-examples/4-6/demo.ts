{
  function join<T, P>(first: T, second: P) {
    return `${first}${second}`
  }

  function join2<T>(first: T, second: T): T {
    return first
  }

  join<string, number>('1', 2)
  join<number, string>(1, '2')

  function map<T>(params: T[]) {
    return params
  }
  map<string>(['123'])
}