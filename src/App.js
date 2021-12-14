import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h2>Friends List Authentikatr</h2>
      <ul>
      <li>
        <Link to='/login'>LOG-IN</Link>
      </li>
      <li>
            <Link to="/logout">Logout</Link>
      </li>
      </ul>

    {/* SWITCH / routes section */}
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Login} /> 
    </Switch>
    </div>
  );
}

export default App;
