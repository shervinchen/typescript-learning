// 生成 *.d.ts  tsc person.ts -d

// 提供*d.ts给别人使用 
// 1. 库：在package.json中添加types字段
// 2. 社区：上传到 DefinitylyTyped

export interface Person {
  name: string
  age: number
}

const logPerson = (person: Person) => {
  console.log(person)
}

export default logPerson
