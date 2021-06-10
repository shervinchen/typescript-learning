{
  enum Color {
    Red,
    Green,
    Blue
  }

  let color: Color = Color.Green;
  let colorName: string = Color[0];

  let notSure: any = 4;
  notSure = 'maybe a string instead';

  let list: any[] = [1, true, 'free'];

  function warnUser(): void {
    console.log('waring message');
  }

  let num: number | null = 3;
  num = null;

  function error(message: string): never {
    throw new Error(message);
  }

  function fail() {
    return error('something failed');
  }

  function inifiniteLoop(): never {
    while (true) { }
  }

  let someValue: any = 'this is a string';
  // let strLength: number = (<string>someValue).length
  let strLength: number = (someValue as string).length;
}
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);