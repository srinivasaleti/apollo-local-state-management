import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient, { HttpLink } from 'apollo-boost';
import { resolvers, typeDefs } from './resolvers';
import Couter from './Counter/Couter';

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: new HttpLink(
    {
      uri: "localhost:4000"
    }
  ),
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    counter: 0
  },
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Couter />
    </ApolloProvider>
  );
}

export default App;
