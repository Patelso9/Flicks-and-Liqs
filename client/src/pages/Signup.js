import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import './User/User.css'

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
       <h1>Flicks&Liqs</h1>
      <div className="col-12 col-lg-10">
        <div className="card">
        <h2 className="login-h2">Sign Up</h2>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/home"> to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h3>Username:
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </h3>
                <h3>Email: 
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </h3>
                <h3>Password:
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                </h3>
                <button
                  className="submit"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

              <NavLink to="/login">
                  <h3 className="toggle">Log in here</h3>
              </NavLink>

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
