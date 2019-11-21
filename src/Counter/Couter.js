import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styles from './styles.css'

export const GET_COUNTER = gql`
  query GetCounterValue {
    counter @client
  }
`;

const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Number!) {
    updateCounter(offset: $offset) @client
  }
`;

export default function Couter() {
  const { data } = useQuery(GET_COUNTER);
  const [increment] = useMutation(UPDATE_COUNTER, { variables: { offset: 1 } })
  const [decrement] = useMutation(UPDATE_COUNTER, { variables: { offset: -1 } })

  return (
    <div>
      <h1>Couter: {data.counter}</h1>
      <div className="controllers">
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
      </div>
    </div>
  )
}
