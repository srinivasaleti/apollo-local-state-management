import gql from 'graphql-tag';
import { GET_COUNTER } from './Counter/Couter';
import { TODOS_QUERY } from './Todos/Todos';

export const typeDefs = gql`
  extend type Query {
    count: Number!,
  }
`;

export const resolvers = {
    Mutation: {
        updateCounter: (_, variables, { cache }) => {
            const data = cache.readQuery({ query: GET_COUNTER });
            cache.writeData({ data: { counter: data.counter + variables.offset } });
            return null
        },
        toggleTodo: (_root, variables, { cache, getCacheKey }) => {
            const id = getCacheKey({ __typename: 'TODO', id: variables.id })

            const fragment = gql`
                  fragment completeTodo on TODO {
                    completed
                    text
                  }
                `;

            const todo = cache.readFragment({ fragment, id });
            const data = { ...todo, completed: !todo.completed };
            cache.writeData({ id, data });
            return null;
        },
        addTodo: (_root, variables, { cache, getCacheKey }) => {
            const { todos = [] } = cache.readQuery({ query: TODOS_QUERY })
            const newTodos = [
                ...todos, {
                    id: todos.length + 1, ...variables.todo, __typename: "TODO"
                }]
            cache.writeData({ data: { todos: newTodos } })
            return null
        },
    }
}