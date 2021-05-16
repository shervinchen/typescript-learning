{
  const numberArr = [1, 2, 3];

  const arr: (string | number)[] = [1, '2', 3];

  const stringArr: string[] = ['a'];

  const undefinedArr: undefined[] = [undefined];

  // type alias
  type User = {
    name: string;
    age: number;
  };
  const objArr: User[] = [{ name: 'csd', age: 18 }];

  class Teacher {
    name: string;
    age: number;
  }
  const teachers: Teacher[] = [
    new Teacher(),
    {
      name: 'csd',
      age: 18,
    },
  ];

  const teacherInfo: [string, string, number] = ['csd', 'male', 18];
  const teacherList: [string, string, number][] = [
    ['mike', 'male', 19],
    ['sun', 'female', 26],
    ['jeny', 'female', 38],
  ];
}
