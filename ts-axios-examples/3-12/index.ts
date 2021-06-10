{
  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
  }

  interface ClockConstructor {
    new(hour: number, minute: number);
  }

  class Clock implements ClockInterface {
    currentTime: Date;

    constructor(h: number, m: number) {

    }

    setTime(d: Date) {
      this.currentTime = d;
    }
  }
}

{
  interface ClockInterface {
    tick();
  }

  interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
  }

  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }

    tick() {
      console.log('beep beep');
    }
  }

  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }

    tick() {
      console.log('tick toc');
    }
  }

  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);
}

{
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = {} as Square;
  square.color = 'blue';
  square.sideLength = 4;
  square.penWidth = 5.0;
}

{
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = (function (star: number) {

    }) as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }
  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;
}

{
  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select();
  }

  class Button extends Control implements SelectableControl {
    select() { };
  }

  class TextBox extends Control {
    select() { }
  }
}