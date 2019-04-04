import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.css";
import Home from "./home/Home";
import Login from "./login/Login";
import Users from "./users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/signup">Signup</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route
            exact
            path="/"
            render={props => {
              console.log(props);
              return <Home {...props} />;
            }}
          />
          <Route
            path="/login"
            render={props => {
              console.log(props);
              return <Login {...props} />;
            }}
          />
          <Route
            path="/users"
            render={props => {
              console.log(props);
              return <Users {...props} />;
            }}
          />
          <Route
            path="/signup"
            render={props => {
              console.log(props);
              return <Signup {...props} />;
            }}
          />
        </main>
      </div>
    );
  }

  logout = event => {
    localStorage.removeItem("token");

    this.props.history.push("/login");
  };
}

export default withRouter(App);
