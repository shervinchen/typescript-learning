abstract class Animal {
  isLive: boolean
  protected weight: string

  constructor(isLive: boolean) {
    this.isLive = isLive
  }

  move(): void {
    console.log('move')
  }

  abstract makeVoice(): void
}

class Human extends Animal {
  static isAnimal = true

  name: string
  age: number
  private _gender: string
  private secret: string

  get gender() {
    return this._gender
  }

  set gender(gender: string) {
    this._gender = gender
  }

  constructor(name: string, age: number, gender: string = 'man') {
    super(true)
    this.name = name
    this.age = age
    this._gender = gender
    this.secret = 'secret'
  }

  say(): string {
    this.move()
    return 'hi'
  }

  makeVoice(): void {
    console.log('voice')
  }
}

let csdoker: Human = new Human('csdoker', 18)
console.log(JSON.stringify(csdoker))
console.log(Human.isAnimal)
console.log(csdoker.isLive)
