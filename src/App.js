import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from './resolvers';
import Couter from './Counter/Couter';
import Todos from './Todos/Todos';

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    counter: 0,
    todos: [{
      id: 1,
      completed: false,
      text: "TODO1",
      __typename: "TODO"
    }]
  },
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Couter />
      <Todos />
    </ApolloProvider>
  );
}

export default App;
