import React from 'react'
import { link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar navbar-expanded-lg navbar-light bg-light'>
      <ul className='nav-item'>
        <li className='nav-item'>
          <link className='nav-link' to='/'>Home</link>
        </li>
        <li className='nav-item'>
          <link className='nav-link' to='/GroupedTeamMembers'>Teams</link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav;
