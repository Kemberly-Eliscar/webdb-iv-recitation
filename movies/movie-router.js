const router = require('express').Router();
const Movies = require('./movie-model.js');

router.get('/', (req, res) => {
  Movies.get()
    .then(movies => {
      res.status(200).json(movies);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Movies.getById(id)
    .then(movie => {
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(404).end();
      }
    });
});

router.get('/:id/actors', (req, res) => {
  const { id } = req.params;
  Movies.getActorsByMovieId(id)
    .then(actors => {
      res.status(200).json(actors);
    });
});

router.get('/:id/reviews', (req, res) => {
  const { id } = req.params;
  Movies.getReviewsByMovieId(id)
    .then(reviews => {
      res.status(200).json(reviews);
    });
});

module.exports = router;
