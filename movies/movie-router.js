const router = require('express').Router();
const Movies = require('./movie-model');

router.get('/', (res, req) => {
    Movies.get()
    .then(movies => {
        res.status(200).json(movies)
    });
});
module.exports = router;