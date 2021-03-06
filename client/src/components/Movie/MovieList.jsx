import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({
  movies,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!movies.length) {
    return <h3>Add a movie below</h3>;
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
                    added this movie on {movie.createdAt}q
                  </span>
                </Link>
              ) : (
                <>
                  {/* <span style={{ fontSize: '1rem' }}>
                    You added this movie: {movie.createdAt}
                  </span> */}
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <h4>{movie.movieText}</h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
