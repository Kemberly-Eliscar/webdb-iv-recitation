exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cast').truncate()
    .then(() => knex('actors').truncate())
    .then(() => knex('reviews').truncate())
    .then(() => knex('movies').truncate())
    .then(() => {
      return knex('movies').insert([
        {id: 1, title: 'See', year: '2019'},
        {id: 2, title: "It's A Wonderful Life", year: '1946'},
        {id: 3, title: "Jaws", year: '1975'},
      ]);
    })
    .then(() => {
      return knex('actors').insert([
        {id: 1, name: 'Christain Tomasljkd'},
        {id: 2, name: 'Bob Hope'},
        {id: 3, name: 'Roy Scheider'},
        {id: 4, name: 'Richard Dreyfuss'},
        {id: 5, name: 'Jimmy Stewart'},
        {id: 6, name: 'Donna Reed'},
      ]);
    })
    .then(() => {
      return knex('cast').insert([
        {movie_id: 1, actor_id: 1, character: "Tamacti Jun"},
        {movie_id: 1, actor_id: 2, character: "Haniwa"},
        {movie_id: 2, actor_id: 3, character: "Brody"},
        {movie_id: 2, actor_id: 4, character: "Hooper"},
        {movie_id: 3, actor_id: 5, character: "George Bailey"},
        {movie_id: 3, actor_id: 6, character: "Mary Hatch"},
      ]);
    })
    .then(() => {
      return knex('reviews').insert([
        {movie_id: 2, rating: 5.0, review: "HOTDOG!"},
        {movie_id: 2, rating: 5.0, review: "HEE-HAW"},
        {movie_id: 1, rating: 3.0, review: "I didn't see it"},
      ]);
    });
  ;
};
