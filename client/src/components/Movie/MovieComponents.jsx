import React from 'react'

const MovieComponents = ({ name, image, plot, genre, year, rating, award, runtime }) => {
    return (
        <div>
            <div className='movie-row'>
                <div className="movie">
                    <h1>{name}</h1>
                    <img src={image} alt="flick img" />
                    <p>{runtime} ({year})</p>
                    <p>Genre: {genre}</p>
                    <p>{plot}</p>
                    <p>Awards Recieved: {award}</p>
                    <p>IMDB rating: {rating} </p>
                </div>
            </div>
        </div>
    )
}

export default MovieComponents
