const { Schema, model } = require('mongoose');
const movieSchema = new Schema({
    movieText: {
        type: String,
        required: 'You need a movie!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    movieAuthor: {
        type: String,
        required: true,
        trim: true,
    },
})
const Movie = model("Movie", movieSchema);
module.exports = Movie;