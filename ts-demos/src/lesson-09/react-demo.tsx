import React from 'react'

type Layout = React.F & { Header: React.FC }

const Layout: Layout = () => {
  return (
    <div>layout</div>
  )
}

Layout.Header = () => {
  return <div>header</div>
}

interface Layout2 extends React.FC {
  Header: React.FC
}

const Layout2: Layout2 = () => {
  return (
    <div>layout2</div>
  )
}

Layout2.Header = () => {
  return (
    <div>header</div>
  )
}