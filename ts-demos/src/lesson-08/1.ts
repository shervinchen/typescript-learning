{
  // interface Human {
  //   name: string
  //   age: number
  // }

  // function fn(this: Human) {
  //   console.log(this)
  // }

  // fn.call({
  //   name: 'csdoker',
  //   age: 18
  // })

  function fn1(this: any) {
    console.log(this)
    function fn2(this: any) {
      console.log(this)
    }
    fn2()
  }
  fn1.call({
    name: 'csdoker'
  })
}