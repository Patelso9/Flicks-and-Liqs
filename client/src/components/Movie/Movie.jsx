import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../../pages/Home/Home.css'
import MovieComponents from './MovieComponents'

const Movie = () => {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('Moana')

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?t='${search}'&apikey=7a94102a`)
    .then(res => {
      setMovies(res.data);
    }).catch(err=> console.log(err, 'error in setMovies useEffect'))
  }, [search])

  const handleChange = async e => {
      setSearch(e.target.value);
  }

  const handleSubmit = async e => {
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

          <button className="randomize" id="rand-movie">Flick</button>
          <form className='movie-search'>
              <input text="text" 
                placeholder="search for flick" 
                name="search" 
                onChange={handleChange}
                onKeyPress={handleKeypress}
                />
              {/* <button onClick={handleSubmit}>Search Flick</button> */}
              <button className="save-btn">Save Flick</button>
          </form>
                {/* <hr/> */}
          <div className="comp-card">
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
        </div>
    )
}

export default Movie;



