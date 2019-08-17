const express = require('express');

const ActionRouter = require('./actions.js')
const ProjectsRouter = require('./projects.js')

const server = express();

server.use(express.json());

server.use('/api/actions', ActionRouter);

server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});




const helmet = require('helmet');





server.use(helmet());
server.use(express.json());


module.exports = server;
