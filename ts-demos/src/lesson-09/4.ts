{
  class Calc {
    public value: number

    constructor(value: number) {
      this.value = value
    }

    add(value: number) {
      this.value += value
      return this
    }

    multiple(value: number) {
      this.value *= value
      return this
    }
  }
  
  class AdvancedCalc extends Calc {
    sin() {
      this.value = Math.sin(this.value)
      return this
    }
  }

  const calc = new AdvancedCalc(1)
  calc.add(2).add(3).multiple(7).sin().add(1)
  console.log(calc.value)
}