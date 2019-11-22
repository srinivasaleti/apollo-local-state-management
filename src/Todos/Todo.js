import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

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
