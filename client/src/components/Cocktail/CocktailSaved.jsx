import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import '../../pages/User/User.css';


import { ADD_DRINK } from '../../utils/mutations';
import { QUERY_DRINKS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const CocktailSaved = () => {
  const [drinkText, setdrinkText] = useState('');

  const [addDrink, { error }] = useMutation(ADD_DRINK, {
    update(cache, { data: { addDrink } }) {
      try {
        const { drinks } = cache.readQuery({ query: QUERY_DRINKS });

        cache.writeQuery({
          query: QUERY_DRINKS,
          data: { drinks: [addDrink, ...drinks] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, drinks: [...me.drinks, addDrink] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addDrink({
        variables: {
          drinkText,
          drinkAuthor: Auth.getProfile().data.username,
        },
      });

      setdrinkText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'drinkText') {
      setdrinkText(value)
    }

  }

  return (
    <div>

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
                name="drinkText"
                placeholder="Type in your drink"
                value={drinkText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="save-btn" type="submit">
                Add Drink
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
          You need to be logged in to save drinks. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )} 
    </div>
  )

}
export default CocktailSaved
