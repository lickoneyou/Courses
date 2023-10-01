import Nav from './Nav'
import React from 'react'

const Header = (props) => {
  return (
    <header>
      <h1>{props.site.site_name}</h1>
      <h2>{props.site.site_title}</h2>
      <Nav li={props.site.nav} />
    </header>
  )
}

export default Header
