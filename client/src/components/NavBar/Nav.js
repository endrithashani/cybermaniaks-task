import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
  <nav className="navbar is-fluid is-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to='/' className="navbar-item is-size-3">
      PhoneBook
    </Link>
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href='menu'>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  </nav>
  )
}

export default Nav