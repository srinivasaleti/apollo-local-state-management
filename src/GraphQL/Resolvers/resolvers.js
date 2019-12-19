import gql from 'graphql-tag';
import { CounterResolvers } from './counterResolvers';
import TodoResolvers from './todosResolver';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const resolvers = {
    Mutation: {
        ...CounterResolvers,
        ...TodoResolvers,
    }
}