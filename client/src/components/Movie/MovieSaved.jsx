import React from 'react'

import {useQuery, gql} from '@apollo/client'
import {LOAD_MOVIES} from '../../GraphQL'


const MovieSaved = () => {

    const [savedMovies, setSavedMovies] = useState([])
    const {error, loading, data} = useQuery(LOAD_MOVIES)


    useEffect(() => {
        if (data) {
          setSavedMovies(data.savedMovies)
        }
      }, [data])

    return (
        <div>
            {savedMovies.map((val) => {
              return <p>{val.movieName}</p>
            })}
        </div>
    )
}

export default MovieSaved
