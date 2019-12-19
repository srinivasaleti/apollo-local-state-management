import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { mutations, typeDefs } from './Mutations';
import initialState from './state';

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers: mutations,
});


cache.writeData({
  data: initialState,
});


export default client