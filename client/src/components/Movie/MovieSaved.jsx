import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';


import { ADD_MOVIE } from '../../utils/mutations';
import { QUERY_MOVIES, QUERY_ME } from '../../utils/queries';

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'movieText') {
      setMovieText(value)
    }

  }

  return (
    <div>
      {/* <h3>What's on your techy mind?</h3> */}

      {Auth.loggedIn() ? (
        <>
          <p>
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="movieText"
                placeholder="Type in your movie"
                value={movieText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Movie
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
       ) : (
        <p>
          You need to be logged in to save movies. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )} 
    </div>
  )

}
export default MovieSaved
