import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { TOGGLE_TODO } from '../GraphQL/Mutations/todosMutation';

export default function Todo({ todo = {} }) {
    const [toggleTodo] = useMutation(TOGGLE_TODO, { variables: { id: todo.id } });

    return (
        <div className='todo'>
            <h2>{todo.text}</h2>
            <label className="switch">
                <input type="checkbox" onChange={toggleTodo} checked={todo.completed} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}
