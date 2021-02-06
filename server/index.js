const express = require("express");
const app = express();
const PORT = 3005;

const { graphqlHTTP } = require("express-graphql");

const schema = require("./Schemas/index");
const cors = require("cors");
const { GraphQLSchema } = require("graphql");

app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running on port 3005");
});
