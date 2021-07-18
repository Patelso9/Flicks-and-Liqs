const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    movies: [Movie]!
    drinks: [Drink]!
}

type Movie {
    _id: ID
    movieText: String
    movieAuthor: String
    
}

type Drink {
    _id: ID
    drinkText: String
    drinkAuthor: String
    
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    users: [User]
    user(username: String!): User
    movies(username: String): [Movie]
    movie(movieId: ID!): Movie
    drinks(username: String): [Drink]
    drink(drinkId: ID!): Drink
    me: User
}



type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMovie(movieText: String!): Movie
    removeMovie(movieId: ID!): Movie
    addDrink(drinkText: String!): Drink
    removeDrink(drinkId: ID!): Movie
   
  }
`;

module.exports = typeDefs;