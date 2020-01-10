import React, { useState } from 'react'
import "./styles.css"
import { useMutation } from '@apollo/react-hooks';
import { ADD_TODO_MUTATION } from '../GraphQL/Mutations/todosMutation';

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
