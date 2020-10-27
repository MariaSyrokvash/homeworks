import React from 'react';
import {NavLink} from 'react-router-dom';
import a from './Header.module.css';

function Header() {

    return (
        <div className={a.box}>
          <NavLink exact to="/pre-junior" className={a.link} activeClassName={a.active}> PreJunior </NavLink>
          <NavLink  to="/junior" className={a.link} activeClassName={a.active}> Junior </NavLink>
          <NavLink  to="/plus-junior" className={a.link} activeClassName={a.active}>Junior Plus</NavLink>
        </div>
    );
}

export default Header;
