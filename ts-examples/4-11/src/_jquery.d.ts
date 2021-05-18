// declare var $: (param: () => void) => void

interface JqueryInstance {
  html: (html: string) => JqueryInstance
}

declare function $(readyFunc: () => void): void
declare function $(selector: string): JqueryInstance
declare namespace $ {
  namespace fn {
    class init { }
  }
}

// interface JQuery {
//   (readyFunc: () => void): void
//   (selector: string): JqueryInstance
// }
// declare var $: JQuery