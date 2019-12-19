import React, { useState } from 'react'
import "./styles.css"
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';

const ADD_TODO_MUTATION = gql`
    mutation AddTodo($todo: TODO!) {
        addTodo(todo: $todo) @client
    }
`

export default function AddTodo() {
    const [text, setText] = useState('')
    const [addTodo] = useMutation(ADD_TODO_MUTATION, { variables: { todo: { text, completed: false } } })

    return (
        <div className='add-todo'>
            <textarea onChange={e => setText(e.target.value)} />
            <button onClick={addTodo}>ADD</button>
        </div>
    )
}
