import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <NavLink to="/">About Me</NavLink>
            {/* <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/customize">Customize</NavLink>
            <NavLink to="/customize">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/guest">Guest home</NavLink> */}
        </div>
    )
}

export default Nav
