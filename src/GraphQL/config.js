import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from './Resolvers';
import initialState from './state';

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: initialState,
});


export default client