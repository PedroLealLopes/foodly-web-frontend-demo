import React from 'react'
import Logo from './Logo'
import Button from './Button'
import { NavLink  } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
      <Logo isDark={true} />
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to='/restaurants'>
              Restaurants
            </NavLink>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <NavLink exact activeClassName="active" to='/profile'>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button />
    </div>
  )
}
