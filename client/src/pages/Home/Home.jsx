import React from 'react'
import Cocktail from '../../components/Cocktail/Cocktail'
import Movie from '../../components/Movie/Movie'
// import Nav from '../../components/Nav/Nav'

const Home = () => {
    return (
        <div>
            {/* <Nav>Nav Bar</Nav> */}

            <div className='movie-box'>
                <Movie />
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
                {/* <Cocktail /> */}
            </div>
        </div>
        
    )
}

export default Home;
