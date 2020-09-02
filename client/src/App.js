import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


import CreateTodo from "./Component/create-todo.component";
import EditTodo from "./Component/edit-todos.component";
import TodosList from "./Component/todos-list.component";
import Tills from "./Component/Tills/tills.component";

import logo from "./logo.png" 



function App() {
  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="patrickduff.digital" target="_blank">
          <img src={logo} width="30" height="30" alt="Corckscrew Logo"></img>
        </a>
        <Link to="/" className="navbar-brand">CorckScrew</Link>
        <div className="nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
            <li className="navbar-item">
              <Link to="/tills" className="nav-link">Tills</Link>
            </li>
          </ul>

        </div>
      </nav>
      <Route path="/" exact component={TodosList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
      <Route path="/tills" component={Tills}/>
    </div>
    
    </Router>
  );
}

export default App;
