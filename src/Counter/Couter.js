import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import styles from './styles.css'
import { GET_COUNTER } from '../GraphQL/Queries/counterQueries';
import { UPDATE_COUNTER } from '../GraphQL/Mutations/counterMutation';

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
