namespace Components {
  export namespace SubComponents {
    export class Test { }
  }

  export interface User {
    name: string
  }

  export class Header {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is header'
      document.body.appendChild(elem)
    }
  }

  export class Content {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is content'
      document.body.appendChild(elem)
    }
  }

  export class Footer {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'This is footer'
      document.body.appendChild(elem)
    }
  }
}