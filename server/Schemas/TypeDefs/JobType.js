const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLScalarType,
  GraphQLList,
} = graphql;
const JobType = new GraphQLObjectType({
  name: "Job",
  fields: () => ({
    id: { type: GraphQLInt },
    company: { type: GraphQLString },
    logo: { type: GraphQLString },
    isNew: { type: GraphQLBoolean },
    isFeatured: { type: GraphQLBoolean },
    position: { type: GraphQLString },
    level: { type: GraphQLString },
    contract: { type: GraphQLString },
    location: { type: GraphQLString },
    languages: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
  }),
});

module.exports = JobType;
