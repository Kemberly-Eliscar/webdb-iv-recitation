exports.up = function(knex) {
  return knex.schema
    .createTable('movies', tbl => {
      tbl.increments();
      tbl.string('year').notNullable();
      tbl.string('title').notNullable();
    })
    .createTable('actors', tbl => {
      tbl.increments('id');
      // tbl.integer('id').unsigned().notNullable().primary();
      tbl.string('name').notNullable();
    })
    .createTable('cast', tbl => {
      tbl.increments();
      tbl
        .integer('movie_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('movies')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('actor_id')
        .unsigned()
        .references('id')
        .inTable('actors')
        .onDelete('SET NULL')
        .onUpdate('CASCADE');
      ;
      tbl
        .string('character')
        .notNullable();
      tbl.unique(['movie_id', 'actor_id', 'character']);
      // tbl.primary(['movie_id', 'actor_id']);
    });
  // tbl.foreign(['movie_id', 'actor_id'])
  //   .refences(['movie_id', 'actor_id'])
  //   .inTable('cast');
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('cast')
    .dropTableIfExists('actors')
    .dropTableIfExists('movies');
};
