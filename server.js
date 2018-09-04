const express = require('express');
const graphHTTP = require('express-graphql');

const app = express();

const schema = require('./schema');

app.use(
  '/graphql',
  graphHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4040);
console.log('listening.....');
