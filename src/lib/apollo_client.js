// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_ENDPOINT', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
