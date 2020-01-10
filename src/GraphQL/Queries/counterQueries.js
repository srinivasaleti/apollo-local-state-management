import gql from 'graphql-tag';
export const GET_COUNTER = gql` 
 query GetCounterValue {
    counter @client  
 }
`;
