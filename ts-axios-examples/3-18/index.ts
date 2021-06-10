{
  function buildName(firstName: string = 'Will', lastName?: string, ...restOfName: string[]): string {
    if (lastName) {
      return `${firstName} ${lastName}`;
    } else {
      return firstName;
    }
  }

  let result1 = buildName('Bob');
  let result2 = buildName('Bob', 'Adams');
  let result3 = buildName(undefined, 'Adams', 'Sr.');

  let buildNameFn: (fname: string, ...rest: string[]) => string = buildName;
}