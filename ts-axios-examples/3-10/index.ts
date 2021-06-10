{
  interface Square {
    color: string;
    area: number;
  }

  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }

  function createSquare(config: SquareConfig): Square {
    let newSquare = {
      color: 'white',
      area: 100
    };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({ color: 'black' });
}

{
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let p1: Point = {
    x: 10,
    y: 20
  };

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
}