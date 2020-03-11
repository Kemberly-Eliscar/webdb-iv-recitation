
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cast').truncate()
  .then(() => knex('actors').truncate()) //then truncate the actors table
  .then(() => knex('movies').truncate()) // then truncate the movies table
    .then(() => {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'See', year: '2019'},
        {id: 2, title: "It's a Wonderful Life", year: '1946'},
        {id: 3, title: "Jaws", year: '1975'},
      ]);
    })
    .then(() => {
      return knex('actors').insert([
        {id: 1, name: 'Christain Thomas'},
        {id: 2, name: 'Nester Cooper'},
        {id: 3, name: 'Roy Scheider'},
        {id: 4, name: 'Richard Dreyfuss'},
        {id: 5, name: 'Jimmy Stewart'},
        {id: 6, name: 'Donna Reed'},
      ])
    })
    .then(() => {
      return knex('cast').insert([
        {movie_id: 1, actor_id: 1, character: "Tamacti Jun"},
        {movie_id: 1, actor_id: 1, character: "Haniwa"},
        {movie_id: 2, actor_id: 1, character: "Brody"},
        {movie_id: 2, actor_id: 1, character: "Hooper"},
        {movie_id: 3, actor_id: 1, character: "George Bailey"},
        {movie_id: 3, actor_id: 1, character: "Mary Hatch"},
      ]);
    });
};
