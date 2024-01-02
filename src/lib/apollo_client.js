// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT, // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
