import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      movies {
        _id
        movieText
      }
      drinks {
        _id
        drinkText
      }
    }
  }
`;

export const QUERY_MOVIES = gql`
  query getMovies {
    movies {
      _id
      movieText
      movieAuthor
    }
  }
`;

export const QUERY_DRINKS = gql`
  query getDrinks {
    drinks {
      _id
      drinkText
      drinkAuthor
    }
  }
`;




export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      movies {
        _id
        movieText
        movieAuthor
      }
      drinks {
        _id
        drinkText
        drinkAuthor
      }
    }
  }
`;
