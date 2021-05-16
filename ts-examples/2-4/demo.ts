{
  // tsc demo.ts
  // node demo.js
  // ts-node demo.ts
  interface Point {
    x: number;
    y: number;
  }

  function sqrt(point: Point) {
    return Math.sqrt(point.x ** 2 + point.y ** 2);
  }

  console.log(sqrt({ x: 1, y: 2 }));
}
