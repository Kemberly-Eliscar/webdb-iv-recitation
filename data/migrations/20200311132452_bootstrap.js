
exports.up = function(knex) {
  return knex.schema
  .createTable('movies', tbl => {
      tbl.increments();
      tbl.string('year').notNullable();
      tbl.string('title').notNullable()
  })
  .createTable('actors', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
  })

  //intermediary table that has two foreign keys for our many to many relationship
  .createTable('cast', tbl => {
      tbl.increments();
      tbl
        .integer("movie_id")
        .unsigned()
        .notNullable() //means a required field
        .references('id')
        .inTable('movies')
      tbl
        .integer("actor_id")
        .unsigned()
        .notNullable() //means a required field
        .references('id')
        .inTable('actors')
        tbl.string('character').notNullable();
        tbl.unique(['movie_id', 'actor_id']); //composite makes both columns together a unique primary key
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('cast')
    .dropTableIfExists('actors')
    .dropTableIfExists('movies');
};
