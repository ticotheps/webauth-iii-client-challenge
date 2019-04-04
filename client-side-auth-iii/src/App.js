import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

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
            <NavLink exact to="/">Home</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
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

  logout = () => {
    localStorage.removeItem('token');

    this.props.history.push('/login');
  };
}

export default withRouter(App);
