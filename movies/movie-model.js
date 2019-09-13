const db = require('../data/db.js');

function get() {
  return db('movies');
}

function getById(id) {
  const movieQuery = get().where({ id }).first();
  const actorsQuery = getActorsByMovieId(id);
  return Promise.all([movieQuery, actorsQuery])
    .then(([movie, actors]) => {
      movie.actors = actors;
      return movie;
    });
  // return get().where({ id }).first();
}

function getActorsByMovieId(id) {
  return db('cast AS c')
    .select(['c.character', 'a.name', 'c.actor_id', 'c.id as cast_id'])
    .join('actors AS a', 'c.actor_id', 'a.id')
    .where({ movie_id: id });
}

function getReviewsByMovieId(id) {
  return db('reviews')
    .select(['id', 'rating', 'review'])
    .where({ movie_id: id });
}

module.exports = {
  get,
  getById,
  getActorsByMovieId,
  getReviewsByMovieId 
};
