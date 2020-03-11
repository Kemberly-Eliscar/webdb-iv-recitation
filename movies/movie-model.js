const db = require('../data/db')

function get() {
    return db('movies');
}

function getById(id) {
    return get().where({ id }).first();
}
function getActorsByMovieId(id){
    return db('cast')
    .where({ movie_id: id });
}

module.exports = {
    get,
    getById,
    getActorsByMovieId
}