#!/usr/bin/env ts-node

function createPrefix(n: number): string {
  return '----'.repeat(n)
}

{
  class Person {
    public children: Person[] = []

    constructor(public name: string) {}
    
    addChild(child: Person): void {
      this.children.push(child);
    }

    introduceFamily(n?: number): void {
      n = n || 1
      console.log(`${createPrefix(n - 1)}${this.name}`)
      this.children.forEach(child => {
        child.introduceFamily(n + 1)
      })
    }
  }
  
  let grandParent = new Person('grandParent')
  let children1 = new Person('children1')
  let children2 = new Person('children2')
  let children11 = new Person('children11')
  let children12 = new Person('children12')
  let children21 = new Person('children21')
  let children22 = new Person('children22')

  grandParent.addChild(children1)
  grandParent.addChild(children2)
  children1.addChild(children11)
  children1.addChild(children12)
  children2.addChild(children21)
  children2.addChild(children22)

  grandParent.introduceFamily();
}