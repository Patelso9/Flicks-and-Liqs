const db = require('../config/connection');
const { User, Cocktail, Movie } = require('../models');
const userSeeds = require('./userSeeds.json');
const cocktailSeeds = require('./cocktailSeeds.json');
const movieSeeds = require('./movieSeeds.json');


db.once('open', async () => {
  try {
    await Cocktail.deleteMany({});
    await Movie.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);

    for (let i = 0; i < cocktailSeeds.length; i++) {
      const { _id, name } = await Cocktail.create(cocktailSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: name },
        {
          $addToSet: {
            cocktails: _id,
          },
        }
      );
    }

    for (let i = 0; i < movieSeeds.length; i++) {
      const { _id, name } = await Movie.create(movieSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: name },
        {
          $addToSet: {
            movies: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

