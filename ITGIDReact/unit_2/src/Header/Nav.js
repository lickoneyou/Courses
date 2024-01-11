import React from 'react'

const Nav = (props) => {
  return (
    <nav>
      <ul className="main-navigation">
        {props.li.map((el) => (
          <li key={el.link + el.text}>
            <a href={el.link}>{el.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
