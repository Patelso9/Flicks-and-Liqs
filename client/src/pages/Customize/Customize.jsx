import React from 'react'

const Customize = () => {
    return (
        <div>
            <div className='customize settings'>
                <h1>Welcome *UserName* </h1>
                <h3>Customize your movie and drink prefrences!</h3>
            </div>
            <div className="movie-pref">
                <h2>Set movie preferences</h2>
                

                <button className="drink-pref-btn"> Save Movie Pref</button>
            </div>
            <div className="drink-pref">
                <h2>Set movie preferences</h2>


                <button className="drink-pref-btn">Save Drink Pref</button>
            </div>
        </div>
    )
}

export default Customize
