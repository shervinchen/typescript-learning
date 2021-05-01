let a: null = null
let b: undefined = undefined
let c: boolean = true
let d: string = 'hi'
let e: number = 1
let f: object = {}
// let g: symbol = Symbol('hi')

let n: any = 1
n = 'string'

enum Gender {
  Man,
  Woman
}
let gender: Gender = Gender.Man
gender = Gender.Woman

function print(x: any): void {
  console.log(x)
}

let xx: number = null
let yy: number = undefined

let num: any = '123'
// let string = num.toString()
// console.log(string.split(''))
console.log((<string>num).split(''))
console.log((num as string).split(''))

let value1: number = 123
let value2: string = value1.toString()

let value3: string = '123'
let value4: number = parseFloat(value3)

let value5: number = 1
let value6: boolean = Boolean(value5)

let value7: object = {
  name: 'csdoker',
  age: 18
}
let value8: string = JSON.stringify(value7)

let value9: string = `{"name": "csdoker", "age": 18}`
let value10: object = JSON.parse(value9)
