{
  let count: number;
  count = 123;

  const func = (str: string): number => {
    return parseInt(str, 10);
  };

  const func1: (str: string) => number = (str) => {
    return parseInt(str, 10);
  };

  const date = new Date();

  interface Person {
    name: string
  }
  const rawData = '{"name": "csd"}';
  const newData: Person = JSON.parse(rawData);

  let temp: number | string = 123
  temp = '456'
}
