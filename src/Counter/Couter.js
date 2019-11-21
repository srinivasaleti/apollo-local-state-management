import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styles from './styles.css'

const GET_COUNTER = gql`
  query GetCounterValue {
    counter @client
  }
`;

export default function Couter() {
  const { data } = useQuery(GET_COUNTER);
  return (
    <div>
      <h1>Couter: {data.counter}</h1>
      <div className="controllers">
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>
  )
}
