const { Schema, model } = require('mongoose');
const movieSchema = new Schema({
    name: {
        type: String,
    },
    id: {
        type: Int,
    },
})
const Movie = model("Movie", movieSchema);
module.exports = Movie;