{
  function add(n1: number, n2: number): number
  function add(n1: string, n2: string): string
  function add(n1: any, n2: any) {
    return n1 + n2
  }
  add(1, 2)

  function add2<T>(n1: T, n2: T): T {
    return n1
  }
}
