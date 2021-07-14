const { Schema, model } = require('mongoose');


const cocktailSchema = new Schema({
    name: {
        type: String,

    },

    id: {
        type: Int,
    },
})

const Cocktail = model("Cocktail", cocktailSchema);

module.exports = Cocktail;