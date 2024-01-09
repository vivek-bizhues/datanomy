import client from '@/lib/apollo_client';
import '@/styles/globals.css'
import '@/styles/style.css'
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
