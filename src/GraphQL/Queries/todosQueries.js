import gql from 'graphql-tag';

export const TODOS_QUERY = gql`
query GetCounterValue {
  todos @client {
    id
    completed
    text
  } 
}
`
