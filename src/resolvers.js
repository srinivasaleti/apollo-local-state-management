import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const resolvers = {};