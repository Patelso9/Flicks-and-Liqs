import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-bar">
            <h1 className="nav-logo">Flicks&Liqs</h1>
            <div className="nav-items">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/">Logout</NavLink>
            </div>
        </div>
    )
}

export default Nav

// Removed
// {/* <NavLink to="/">Landing Page</NavLink> */}
// {/* <NavLink to="/customize">Customize</NavLink> */}
// {/* <NavLink to="/login">Login</NavLink>
// <NavLink to="/signup">Sign Up</NavLink> */}
// {/* <NavLink to="/guest">Guest home</NavLink> */}