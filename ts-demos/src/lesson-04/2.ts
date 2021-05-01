{
  let obj = {
    name: 'frank',
    age: 18,
    nation: 'China',
  };

  // let name = obj.name;
  // let age = obj.age;
  // let nation = obj.nation;

  //解构
  let { name, age, nation } = obj;

  console.log(name, age, nation);
}

{
  let arr = ['apple', 'orange', 'pear'];
  // let fruit1 = arr[0];
  // let fruit2 = arr[1];
  // let fruit3 = arr[2];
  let [fruit1, fruit2, fruit3] = arr;
  console.log(fruit1, fruit2, fruit3);
}

{
  function sayHi({ name, age }: any) {
    console.log(`Hi, ${name}, ${age}`);
  }

  sayHi({ name: 'frank', age: 18 });
}

{
  let a1 = [1, 2, 3]
  let a2 = [4, 5, 6]
  let a3 = [...a1, ...a2]
  console.log(a3)
}
