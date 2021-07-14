const { AuthenticationError } = require('apollo-server-express');
const { User, Cocktail, Movie } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('movies', 'cocktails');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('movies', 'cocktails');
        },
        cocktails: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Cocktail.find(params).sort({ createdAt: -1 });
        },
        cocktail: async (parent, { cocktailId }) => {
            return Cocktail.findOne({ _id: cocktailId });
        },

        movies: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Movie.find(params).sort({ createdAt: -1 });
        },
        movie: async (parent, { movieId }) => {
            return Movie.findOne({ _id: movieId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('movies', 'cocktails');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },


    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addCocktail: async (parent, { name }, context) => {
            if (context.user) {
                const cocktail = await Cocktail.create({
                    name,
                    id: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { cocktails: cocktail_id } }
                );

                return cocktail;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addMovie: async (parent, { name }, context) => {
            if (context.user) {
                const movie = await Movie.create({
                    name,
                    id: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { movies: movie_id } }
                );

                return movie;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeCocktail: async (parent, { cocktailId }, context) => {
            if (context.user) {
                const cocktail = await Cocktail.findOneAndDelete({
                    _id: cocktailId,
                    cocktailAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { cocktails: cocktail._id } }
                );

                return cocktail;
            }
            throw new AuthenticationError('You need to be logged in!');
        },


        removeMovie: async (parent, { movieId }, context) => {
            if (context.user) {
                const movie = await Movie.findOneAndDelete({
                    _id: movieId,
                    movieAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { movies: movies._id } }
                );

                return thought;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

}

module.exports = resolvers;