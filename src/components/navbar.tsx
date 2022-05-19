import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.scss'

export const Navbar: React.FunctionComponent = () => (
    <nav className="navbar">
      <div className="nav-wrapper">
        <a href="/" className="logo navbar__logo"><img src="" alt="" /></a>
        <NavLink to="/">Todo list</NavLink>
        <NavLink to="/about">about</NavLink>
      </div>
    </nav>
)