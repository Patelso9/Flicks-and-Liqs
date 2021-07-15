import React from 'react'
import Cocktail from '../../components/Cocktail/Cocktail'
import Movie from '../../components/Movie/Movie'
import MovieTMD from '../../components/Movie/MovieTMD'
// import Nav from '../../components/Nav/Nav'

const Home = () => {
    return (
        <div>
            {/* <Nav>Nav Bar</Nav> */}

            <div className='movie-box'>
                <Movie />
                <MovieTMD />
            </div>
                <hr />
                <div className ="drink-return">
                    Drink randomizer/search result
                </div>
                {/* <Cocktail /> */}

        </div>
        
    )
}

export default Home;
