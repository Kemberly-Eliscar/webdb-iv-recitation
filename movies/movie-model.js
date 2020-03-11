const db = require('../data/db')

function get() {
    return db('movies');
}

function getById(id) {
    return get().where({ id }).first();
}
function getActorsByMovieId(id){
    return db('cast AS c')
    .select(['c.character', 'a.name', 'c.actor_id', 'c.id as cast_id'])
    .join('actors AS a', 'c.actor_id', 'a.id')
    .where({ movie_id: id });
}

module.exports = {
    get,
    getById,
    getActorsByMovieId
}