import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Movie.css'
import MovieComponents from './MovieComponents'

const Movie = () => {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?t='${search}'&apikey=7a94102a`)
    .then(res => {
      setMovies(res.data);
    }).catch(err=> console.log(err, 'error in setMovies useEffect'))
  })

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSubmit();
  }
};

    return (
        <div>
          <div className="liq-header">

          <button className="movie-random">Flick</button>
                <form className='movie-search'>
                    <input text="text" 
                      placeholder="search for flick" 
                      search={search} 
                      onChange={handleChange}
                      onKeyPress={handleKeypress} />
                    <button onClick={handleSubmit}>Search Flick</button>
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



