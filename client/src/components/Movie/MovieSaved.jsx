import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useMutation } from '@apollo/client';


import {ADD_MOVIE} from '../../utils/mutations';
import {QUERY_MOVIES, QUERY_ME} from '../../utils/queries';

import Auth from '../../utils/auth';

const MovieSaved = () => {
  const [movieText, setMovieText] = useState('');

  

  const [addMovie, { error }] = useMutation(ADD_MOVIE, {
    update(cache, { data: { addMovie } }) {
      try {
        const { movies } = cache.readQuery({ query: QUERY_MOVIES });

        cache.writeQuery({
          query: QUERY_MOVIES,
          data: { movies: [addMovie, ...movies] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, movies: [...me.movies, addMovie] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMovie({
        variables: {
          movieText,
          movieAuthor: Auth.getProfile().data.username,
        },
      });

      setMovieText('');
    } catch (err) {
      console.error(err);
    }
  };

    return (
        <div>
            {savedMovies.map((val) => {
              return <p>{val.addMovie}</p>
            })}
        </div>
    )
}

export default MovieSaved
