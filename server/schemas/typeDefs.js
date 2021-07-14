const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    cocktails: [Cocktail]!
    movies: [Movie]!
}

type Movie {
    _id: ID
    name: String
    
}
type Cocktail {
    _id: ID
    name: String
    
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    users: [User]
    user(username: String!): User
    cocktails(username: String): [Cocktail]
    cocktail(cocktailId: ID!): Cocktail
    movies(username: String): [Movie]
    movie(movieId: ID!): Movie
    me: User
}



type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCocktail(Name: String!): Cocktail 
    removeCocktail(cocktailId: ID!): Cocktail
    addMovie(Name: String!): Movie
    removeMovie(movieId: ID!): Movie
   
  }
`;

module.exports = typeDefs;