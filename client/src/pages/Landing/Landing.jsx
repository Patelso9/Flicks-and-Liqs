import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <div>
            <h1 className='landing-logo'>Flicks&Liqs</h1>
            <p>Are you stressed from coding?</p>
            <div className='stress-options'>
                <button className='stress-yes'>yes</button>
                <p>or</p>
                <button className='stress-yes'>yes</button>
            </div>
        </div>
    )
}

export default Landing
