// declare var $: (param: () => void) => void

declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance
  }

  function $(readyFunc: () => void): void
  function $(selector: string): JqueryInstance

  namespace $ {
    namespace fn {
      class init { }
    }
  }

  export = $
}

// interface JQuery {
//   (readyFunc: () => void): void
//   (selector: string): JqueryInstance
// }
// declare var $: JQuery