import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({
  movies,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!movies.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {movies &&
        movies.map((movie) => (
          <div key={movie._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${movie.movieAuthor}`}
                >
                  {movie.movieAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {movie.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {movie.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{movie.movieText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${movie._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
