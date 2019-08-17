const express = require('express');


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;
const express = require('express');
const helmet = require('helmet');



const server = express();

server.use(helmet());
server.use(express.json());


module.exports = server;
