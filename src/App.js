import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './GraphQL/config'
import Couter from './Counter/Couter';
import Todos from './Todos/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./app.css"
import RandomNumber from './RandomNumber';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="main">
          <div className='sidebar'>
            <Link to="/"><li>RandomNumber</li></Link>
            <Link to="/counter"><li>Counter</li></Link>
            <Link to="/todos"><li>Todos</li></Link>
          </div>

          <div className='content'>
            <Switch>
              <Route path="/todos">
                <Todos />
              </Route>
              <Route path="/counter">
                <Couter />
              </Route>
              <Route path="/">
                <RandomNumber />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
