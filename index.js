const express = require('express');

const server = express();

server.use(express.json());

const port = process.env.PORT || 6020;

server.listen(port, console.log(`Server on ${port}`));