import gql from 'graphql-tag';
import { GET_COUNTER } from './Counter/Couter';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const resolvers = {
    Mutation: {
        updateCounter: (_, variables, { cache }) => {
            const data = cache.readQuery({ query: GET_COUNTER });
            cache.writeData({ data: { counter: data.counter + variables.offset } });
            return null
        },
    },
};