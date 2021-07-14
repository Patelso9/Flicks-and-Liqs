const { Schema, model } = require('mongoose');


const movieSchema = new Schema({
    name: {
        type: String,

    },

    

})

const Movie = model("Movie", movieSchema);

module.exports = Movie;