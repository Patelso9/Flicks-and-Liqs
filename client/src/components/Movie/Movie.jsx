import React from 'react'
import './Movie.css'

const Movie = () => {

  const [movies, setMovies] = useState([])
  const [search, setSearchMovies] = usestate('')

  useEffect(() => {
    axios.get('https://www.omdbapi.com/?t=', {  }, { movieKey })
    .then(res => {
      setMovies(res.data);
    }).catch(err=> console.log(err, 'error in setMovies useEffect'))
  })

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const movieSearched = movies.filter(movie =>
    movie.name.includes(search))
    // check on api key and search criteria

    return (
        <div>
            
        </div>
    )
}

export default Movie;



