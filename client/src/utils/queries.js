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
    }
  }
`;
