///<reference path='./components.ts' />

namespace Home {
  export class Page {
    user: Components.User = {
      name: 'csd'
    }

    constructor() {
      new Components.Header()
      new Components.Content()
      new Components.Footer()
    }
  }
}