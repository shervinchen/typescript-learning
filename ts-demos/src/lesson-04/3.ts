{
  enum Gender {
    Man = 'man',
    Woman = 'woman',
  }

  interface Shape {
    head: string
    body: string
  }
  
  interface Life {
    carbon: boolean
    hydrogen: boolean
    oxygen: boolean
  }

  interface Animal extends Life {
    move(): void
  }

  interface Human extends Animal {
    readonly name: string
    readonly age: number
    gender: Gender
    shape: Shape
    likedGame?: Array<string>
    say(word: string): void
  }

  let csdoker: Human = {
    carbon: true,
    hydrogen: true,
    oxygen: true,
    name: 'csdoker',
    age: 18,
    gender: Gender.Man,
    shape: {
      head: 'head',
      body: 'body',
    },
    say(word: string) {
      console.log(`${this.name}: ${word}`)
    },
    move() {
      console.log('move')
    }
  }

  csdoker.say('I am csdoker')
  csdoker.move()
}

{
  interface SquareConfig {
    color?: string
    width?: number
  }

  function createSquare(config: SquareConfig): void {
    // ...
  }

  let mySquare1 = createSquare({ color: 'red', width: 100 })
  let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
}

{
  interface TwoCal {
    (a: number, b: number): number
    reverseCal(a: number, b:number): number
  }

  let add: TwoCal = ((): TwoCal  => {
    function cal(a: number, b: number): number {
      return a + b;
    }
    cal.reverseCal = function(a: number, b: number): number {
      return a - b;
    }
    return cal
  })()

  console.log(add(1, 2))
}
