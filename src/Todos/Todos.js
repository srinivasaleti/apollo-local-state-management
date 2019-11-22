import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const TODOS_QUERY = gql`
query GetCounterValue {
  todos @client {
    id
    completed
    text
  } 
}
`

export default function Todos() {
    const result = useQuery(TODOS_QUERY)
    console.log(result.data)
    return (
        <div>
            Todos
        </div>
    )
}
