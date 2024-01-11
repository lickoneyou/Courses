import Nav from '../Header/Nav'

import React from 'react'

const Footer = (props) => {
  return (
    <footer>
      <h3>site_name</h3>
      <Nav li={props.site.nav} />
    </footer>
  )
}

export default Footer
