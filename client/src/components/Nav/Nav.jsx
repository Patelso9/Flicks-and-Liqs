import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav-bar'>
            <NavLink to="/">Landing Page</NavLink>
            <NavLink to="/customize">Customize</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {/* <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/guest">Guest home</NavLink> */}
        </div>
    )
}

export default Nav
