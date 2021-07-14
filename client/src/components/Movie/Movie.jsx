import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Movie.css'
import MovieComponents from './MovieComponents'

const Movie = () => {

  const [movies, setMovies] = useState([])
  const search = "frozen"

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?t='${search}'&apikey=7a94102a`)
    .then(res => {
      setMovies(res.data);
    }).catch(err=> console.log(err, 'error in setMovies useEffect'))
  })


  const handleSubmit = e => {
    setMovies(e.target.value)
  }

    return (
        <div>
          <div className="liq-header">

          <button className="movie-random">Flick</button>
                <form className='movie-search' onChange={handleSubmit}>
                    <input text="text" placeholder="search for flick" />
                    <button>Search Flick</button>
                    <button>Save Flick</button>
                </form>
                <hr/>

                <MovieComponents
                  key= {movies.imdbID}
                  name= {movies.Title}
                  image= {movies.Poster}
                  plot= {movies.Plot}
                  genre= {movies.Genre}
                  year= {movies.Year}
                  rating= {movies.imdbRating}
                  runtime= {movies.Runtime}
                  award= {movies.Awards}
              />
            
        </div>
        </div>
    )
}

export default Movie;



