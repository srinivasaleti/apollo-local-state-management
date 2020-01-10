import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import "./styles.css"
import Todo from './Todo';
import AddTodo from './AddTodo';
import { TODOS_QUERY } from '../GraphQL/Queries/todosQueries';

export default function Todos() {
    const { data: { todos = [] } = {} } = useQuery(TODOS_QUERY)
    return (
        <div>
            <h1>Add TODO</h1>
            <AddTodo />
            <h1>Todos</h1>
            {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
        </div>
    )
}
