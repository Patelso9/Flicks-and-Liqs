import React from 'react'
import Cocktail from '../../components/Cocktail/Cocktail'
import Movie from '../../components/Movie/Movie'
import MovieTMD from '../../components/Movie/MovieTMD'
import Nav from '../../components/Nav/Nav'
import './Home.css'


const Home = () => {
    return (
        <div>
        <Nav />
        <div className="home">
            <div className='home-card'>
                <div className='movie-box'>
                    <Movie />
                    {/* <MovieTMD /> */}
                </div>
            </div>
        <hr />
            <div className='home-card'>
                <div className ="drink-box">
                <Cocktail />
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Home;
