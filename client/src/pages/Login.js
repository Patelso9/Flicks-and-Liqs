import React, { useState } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import './User/User.css'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
        <h1>Flicks&Liqs</h1>
      <div className="col-12 col-lg-10">
        <div className="card">
          <h2 className="login-h2">Login</h2>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Redirect to="/home"> to the homepage.</Redirect>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
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
                <br />
                <button
                  className="submit"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            <NavLink to="/signup">
                  <h3 className="toggle">Sign up here</h3>
              </NavLink>

            {error && (
              <div className="error">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
