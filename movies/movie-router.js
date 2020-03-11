const router = require('express').Router();
const Movies = require('./movie-model');

router.get('/', (req, res) => {
    Movies.get()
    .then(movies => {
        res.status(200).json(movies)
    });
});

///get individual movie

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Movies.getById(id)
    .then(movie => {
        if (movie) {
            res.status(200).json(movie);
        }else{
            res.status(404).end();
        }
    });
});
module.exports = router;