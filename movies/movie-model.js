const db = require('../data/db')

function get() {
    return db('movies');
}

function getById(id) {
    return get().where({ id }).first();
}


module.exports = {}