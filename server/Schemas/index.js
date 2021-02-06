const graphql = require("graphql");
const jobData = require("../MOCK_DATA.json");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} = graphql;

const JobType = require("./TypeDefs/JobType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllJob: {
      type: new GraphQLList(JobType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return jobData;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createJob: {
      type: JobType,
      args: {
        company: { type: GraphQLString },
        logo: { type: GraphQLString },
        isNew: { type: GraphQLBoolean },
        isFeatured: { type: GraphQLBoolean },
        position: { type: GraphQLString },

        level: { type: GraphQLString },

        contract: { type: GraphQLString },
        location: { type: GraphQLString },
        languages: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        jobData.push({
          id: jobData.length + 1,
          company: args.company,
          logo: args.logo,
          isNew: args.isNew,
          isFeatured: args.isFeatured,
          position: args.position,

          level: args.level,

          contract: args.contract,
          location: args.location,
          languages: args.languages,
          description: args.description,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
