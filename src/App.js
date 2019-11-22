import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { resolvers, typeDefs } from './resolvers';
import Couter from './Counter/Couter';
import Todos from './Todos/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./app.css"

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    counter: 0,
    todos: [{
      id: 1,
      completed: false,
      text: "TODO1",
      __typename: "TODO"
    }]
  },
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="main">
          <div className='sidebar'>
            <Link to="/"><li>Counter</li></Link>
            <Link to="/todos"><li>Todos</li></Link>
          </div>

          <div className='content'>
            <Switch>
              <Route path="/todos">
                <Todos />
              </Route>
              <Route path="/">
                <Couter />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
