import React from 'react'

const MovieComponents = ({ name, image, plot, genre, year, rating, award, runtime }) => {
    return (
        <div>
            <div className='movie-row'>
                <div className="movie">
                    <h3>{name}</h3>
                    <img src={image} alt="flick img" />
                    <p>{runtime} ({year})</p>
                    <p>{genre}</p>
                    <p>{plot}</p>
                    <p>{award}</p>
                    <p>Rating: {rating} </p>
                </div>
            </div>
        </div>
    )
}

export default MovieComponents
