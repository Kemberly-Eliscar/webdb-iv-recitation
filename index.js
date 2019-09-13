const express = require('express');

const server = express();

server.use(express.json());

const moviesRouter = require('./movies/movie-router.js');
server.use('/movies', moviesRouter);

const port = process.env.PORT || 6002;
server.listen(port, console.log(`Server on ${port}`));
