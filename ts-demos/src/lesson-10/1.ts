{
  interface Props1 {
    action: 'create' | 'update'
    id?: number
    name: string
  }

  type Props2 = {
    action: 'create'
    name: string
  } | {
    action: 'update'
    name: string
    id: number
  }

  function fn(a: Props2) {
    if (a.action === 'create') {
      console.log(a.name)
    } else {
      console.log(a.id)
    }
  }
}