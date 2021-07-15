import React, { useState, useEffect } from 'react'

import {useQuery, gql} from '@apollo/client'
// import {ADD_MOVIES} from '../../GraphQL'


const MovieSaved = () => {

    const [savedMovies, setSavedMovies] = useState([])
    const {error, loading, data} = useQuery(ADD_MOVIES)


    useEffect(() => {
        if (data) {
          setSavedMovies(data.movieText)
        }
      }, [data])

    return (
        <div>
            {savedMovies.map((val) => {
              return <p>{val.addMovie}</p>
            })}
        </div>
    )
}

export default MovieSaved
