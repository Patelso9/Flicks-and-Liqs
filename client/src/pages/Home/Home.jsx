import React from 'react'
import Nav from '../../components/Nav/Nav'

const Home = () => {
    return (
        <div>
            {/* <Nav>Nav Bar</Nav> */}

            <div className='movie-box'>
                <button className="movie-random">Flick</button>
                <form className='movie-search'>
                    <input text="text" placeholder="search for flick" />
                    <button>Search Flick</button>
                    <button>Save Flick</button>
                </form>
                <hr/>
                <div className ="movie-return">
                    Movie randomizer/search result
                </div>
            </div>


            <div className='drink-box'>
                <button className="drink-random">Liq</button>
                <form className='drink-search'>
                    <input text="text" placeholder="search for liq" />
                    <button>Search Liq</button>
                    <button>Save Liq</button>
                </form>
                <hr/>
                <div className ="drink-return">
                    Drink randomizer/search result
                </div>
            </div>
        </div>
        
    )
}

export default Home;
