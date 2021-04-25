function hi(name: string, age = 18): void {
  console.log(`Hi, ${name}, ${age}`)
}
hi('csdoker')

let hi2 = function(name: string, age: number) {
  console.log(`Hi, ${name}`)
}

let hi3 = (name: string, age: number) => {
  console.log(`Hi, ${name}`)
}

function add(a: number, b: number): number {
  // return a + b
  return arguments[0] + arguments[1]
}
add(100, 200)

function printThis() {
  'use strict'
  console.log(this)
  console.log(arguments)
}
printThis.call('fuck', 100, 200)
