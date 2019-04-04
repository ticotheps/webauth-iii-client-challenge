import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Home from './home/Home';
import Login from './login/Login';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/users">Users</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/users" component={Users}></Route>
        </main>
      </div>
    );
  }
}

export default App;
