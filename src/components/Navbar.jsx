import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <NavLink to="/" className="brand-logo">React Users</NavLink>

          <ul className="right">
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/add">Добавить пользователя</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
