const { Schema, model } = require('mongoose');
const cocktailSchema = new Schema({
    drinkText: {
        type: String,
        required: 'You need a drink',
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      drinkAuthor: {
        type: String,
        required: true,
        trim: true,
      },
})
const Cocktail = model("Cocktail", cocktailSchema);
module.exports = Cocktail;