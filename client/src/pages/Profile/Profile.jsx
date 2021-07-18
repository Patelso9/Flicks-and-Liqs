import React from 'react'
import { Redirect, useParams, NavLink } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth'
import Nav from '../../components/Nav/Nav';
import MovieSaved from '../../components/Movie/MovieSaved'
import MovieList from '../../components/Movie/MovieList'
import CocktailList from '../../components/Cocktail/CocktailList';
import CocktailSaved from '../../components/Cocktail/CocktailSaved';

const Profile = () => {
    const { username: userParam } = useParams();
  
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Redirect to="/me" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <div>
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
        <NavLink to="/login">
        <h3 className="toggle">Log in here</h3>
      </NavLink>
      </div>

      );
    }
    return (
        <div>
          <Nav />
          <div className="flex-row justify-center mb-3">
            <h3 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
              {userParam ? `${user.username}'s` : 'Your'} profile
            </h3>

<div className='home'>
        <div className="home-card">
        <h2>Saved Movies</h2>
            <div className="comp-card">
              <MovieList
                movies={user.movies}
                title={`${user.username}'s movies...`}
                showTitle={false}
                showUsername={false}
              />
            </div>
            {!userParam && (
              <div className="col-12 col-md-10 mb-3 p-3">
                <MovieSaved/>
              </div>
            )}
          </div>

          <hr />

        <div className="home-card">
        <h2>Saved Drinks</h2>
            <div className="comp-card">
              <CocktailList
                drinks={user.drinks}
                title={`${user.username}'s movies...`}
                showTitle={false}
                showUsername={false}
              />
            </div>
            {!userParam && (
              <div className="col-12 col-md-10 mb-3 p-3">
                <CocktailSaved/>
              </div>
            )}
          </div>
          </div>    

          </div>
        </div>
      );
    };
    
    export default Profile;
