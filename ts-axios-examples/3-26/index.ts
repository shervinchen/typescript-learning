{
  // tsc index.ts --strictNullChecks
  let s = 'foo';
  s = null;

  let sn: string | null = 'bar';
  sn = null;
  sn = undefined;

  function f(x: number, y?: number) {
    return x + (y || 0);
  }
  f(1, 2);
  f(1);
  f(1, undefined);

  class C {
    a: number;
    b?: number;
  }
  let c = new C();
  c.a = 12;
  c.b = 13;
  c.b = undefined;
}

{
  function fn(sn: string | null): string {
    return sn || 'default';
  }

  function broken(name: string | null): string {
    function postfix(epithet: string) {
      return `${name!.charAt(0)} . the ${epithet}`;
    }
    name = name || 'Bob';
    return postfix(name);
  }
}

{
  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === 'ease-in') { }
      else if (easing === 'ease-out') { }
      else if (easing === 'ease-in-out') { }
      else { }
    }
  }

  let button = new UIElement();
  button.animate(0, 0, 'ease-in');
}