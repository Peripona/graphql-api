const fetch = require('node-fetch');
const util = require('util');
const {
  GraphQLSchema,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const parseXml = util.promisify(require('xml2js').parseString);

/*
fetch(
  'https://www.goodreads.com/author/show.xml?id=4432&key=XRSYrxC2hjEWPVi1nHlaQ'
).then(
  response => response.text()
).then(parseXml);
*/

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: '....',
  fields: () => ({
    name: GraphQLString,
  }),
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '.....',
    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: { type: GraphQLInt },
        },
      },
    }),
  }),
});
