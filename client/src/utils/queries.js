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
      cocktails {
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

export const QUERY_COCKTAILS = gql`
  query getCocktails {
    cocktails {
      _id
      drinkText
      drinkAuthor
    }
  }
`;

// export const QUERY_SINGLE_THOUGHT = gql`
//   query getSingleThought($thoughtId: ID!) {
//     thought(thoughtId: $thoughtId) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//   }
// `;

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
      cocktails {
        _id
        drinkText
        drinkAuthor
      }
    }
  }
`;
