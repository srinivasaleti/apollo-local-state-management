import gql from 'graphql-tag';
import { CounterResolvers } from '../Resolvers/counterResolvers';
import TodoResolvers from '../Resolvers/todosResolver';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const mutations = {
  Mutation: {
    ...CounterResolvers,
    ...TodoResolvers,
  }
}