const fetch = require('node-fetch');
const util = require('util');
const {
  GraphQLSchema,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const parseXml = util.promisify(require('xml2js').parseString);

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: '....',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: xml => {
        console.log(xml);
        return xml.GoodreadsResponse.author[0].name[0];
      },
    },
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
        resolve: (root, args) =>
          fetch(
            `https://www.goodreads.com/author/show.xml?id=${
              args.id
            }&key=XRSYrxC2hjEWPVi1nHlaQ`,
          )
            .then(response => response.text())
            .then(parseXml),
      },
    }),
  }),
});
