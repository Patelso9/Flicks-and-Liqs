const db = require('../config/connection');
const { User, Cocktail, Movie } = require('../models');

const userData = require('./userSeeds.json');
const cocktailData = require('./drinkSeeds.json');
const movieData = require('./movieSeeds.json');


db.once('open' , async () => {
await User.deleteMany({});
await Cocktail.deleteMany({});
await Movie.deleteMany({});

// bulk create each model
const users = await User.insertMany(userData);
const cocktails = await Cocktail.insertMany(cocktailData);
const movies = await Movie.insertMany(movieData);

for (newCocktail of cocktails) {
  // randomly add each class to a school
  const tempUser = users[Math.floor(Math.random() * cocktails.length)];
  tempUser.cocktails.push(newCocktail._id);
  await tempUser.save();
}

for (newMovie of movies) {
  // randomly add each class to a school
  const tempUser = users[Math.floor(Math.random() * movies.length)];
  tempUser.movies.push(newMovie._id);
  await tempUser.save();
}






  console.log('all done!');
  process.exit(0);

})
