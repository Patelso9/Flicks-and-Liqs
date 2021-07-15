import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Movie.css'
import MovieComponents from './MovieComponents'

const MovieTMD = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/550?api_key=d4d5ee1ea812efdeaaa0f6c0d587a300`)
        .then(res => {
            setMovies(res.data)
        }).catch(err=> console.log(err, 'TMDB api issue'))
    }, [])

    const handleChange = async e => {
        e.preventDefault()
        setMovies(e.target.value)
    }

    return (
        <div>
            <div className="liq-header">

            <button className="movie-random" onChange={handleChange}>Flick</button>
                <form className='movie-search'>
                    <input text="text" 
                        placeholder="search for flick" 
                        />
                    <button >Search Flick</button>
                    <button>Save Flick</button>
                </form>
                <hr/>

                <MovieComponents
                    key= {movies.id}
                    name= {movies.original_title}
                    image= {movies.poster_path}
                    plot= {movies.overview}
                    genre= {movies.tagline}
                    year= {movies.release_date}
                    rating= {movies.vote_average}
                    // runtime= {movies.Runtime}
                    // award= {movies.Awards}
                />
            
            </div>
        </div>
    )
}

export default MovieTMD
