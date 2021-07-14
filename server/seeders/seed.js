const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/movie', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});




















db.Movie.deleteMany({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });