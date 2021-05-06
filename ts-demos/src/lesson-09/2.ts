{
  interface A {
    name: string
    age: number
  }

  interface B {
    name: string
    grade: number
  }

  const c: A | B = {
    name: 'csdoker',
    age: 18
  }

  function add(a: string, b: string): string;
  function add(a: number, b: number): number;
  function add(a: any, b: any): any {
    return a + b
  }
  add(1, 2)
  add('1', '2')

  type Name = string
  const name: Name = 'jack'
}