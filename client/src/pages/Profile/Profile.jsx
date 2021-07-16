import React from 'react'
import MovieSaved from '../../components/Movie/MovieSaved'

const Profile = () => {
    return (
        <div>
            <h1>Welcome *UserName* </h1>
            <h3>Saved Flicks&Liqs :</h3>

            <div className="movie-saved">
                <h2>Saved Movies</h2>
                {/* <MovieSaved /> */}
            </div>

            <div className="drink-saved">
                <h2>Saved Drinks</h2>
            </div>

        </div>
    )
}

export default Profile
