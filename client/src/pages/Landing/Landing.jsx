import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './Landing.css';

const Landing = () => {

    const onSubmit = () => {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <h1 className='landing-logo'>Flicks&Liqs</h1>
            <p className='are-you'>Are you stressed from coding?</p>
            <br />
            <div className='stress-options'>
                <NavLink to="/login">
                    <button className='stress-yes'>Yes</button>
                    <h6>Log In</h6>
                </NavLink>
                <p className='or'>or</p>
                <NavLink to="/signup">
                    <button className='stress-yes'>Yes</button>
                    <h6>Sign Up</h6>
                </NavLink>
            </div>
        </div>
    )
}

export default Landing
