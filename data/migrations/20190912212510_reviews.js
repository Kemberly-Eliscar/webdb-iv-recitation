
exports.up = function(knex) {
  return knex.schema.createTable('reviews', tbl => {
    tbl.increments();
    tbl
      .float('rating')
      .notNullable();
    tbl.text('review');
    tbl
      .integer('movie_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('movies');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews');
};
