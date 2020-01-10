import gql from 'graphql-tag';
import { CounterMutation } from '../Mutations/counterMutation';
import TodoMutations from '../Mutations/todosMutation';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const resolvers = {
  Mutation: {
    ...CounterMutation,
    ...TodoMutations,
  }
}