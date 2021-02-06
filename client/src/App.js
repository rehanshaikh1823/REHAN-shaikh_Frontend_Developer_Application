import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import ROUTES, { RenderRoutes } from "./routes";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return `Graphql error ${message}  ${location} ${path}`;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3005/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <RenderRoutes routes={ROUTES} />
      </div>
    </ApolloProvider>
  );
}

export default App;
