import React from 'react';
import { NavLink } from 'react-router-dom';

import M from 'materialize-css';
import '../scss/components/navbar.scss';

export const Navbar = () => {
  React.useEffect(() => {
    const mobileNav = document.querySelector(".sidenav");

    M.Sidenav.init(mobileNav, {
      edge: "left",
      inDuration: 250
    });
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <NavLink to="/" className="brand-logo">React Users</NavLink>

            <ul className="right hide-on-med-and-down">
              <li className="nav-link"><NavLink exact to="/">Главная</NavLink></li>
              <li className="nav-link"><NavLink to="/add">Добавить пользователя</NavLink></li>
            </ul>

            <a href="!#" data-target="slide-out" className="sidenav-trigger hide-on-large-only"><i className="material-icons">menu</i></a>
          </div>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li data-target="slide-out" className="sidenav-close">
          <NavLink exact to="/" className="waves-effect" >
            <i className="material-icons">home</i>
            Главная
          </NavLink>
        </li>

        <li data-target="slide-out" className="sidenav-close">
          <NavLink to="/add" className="waves-effect">
            <i className="material-icons">add</i>
            Добавить пользователя
          </NavLink>
        </li>
      </ul>

    </>
  )
};
