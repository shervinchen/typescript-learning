{
  function identity<T>(arg: T): T {
    return arg;
  }

  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
  }

  // let output = identity<string>('myString');
  // let output = identity('myString');

  // let myIdentity: <T>(arg: T) => T = identity;

  interface GenericIdentityFn<T> {
    (arg: T): T;
  }
  let myIdentity: GenericIdentityFn<number> = identity;
}