import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "tico",
    password: "blue",
    department: "student"
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <div>
              <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

  // allows the user to see what they are typing into the <input> field
  handleInputChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:4000/api/auth/login";

    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log('Login Response:', res);
        localStorage.setItem("jwt", res.data.token);

        this.props.history.push("/users");
      })
      .catch(error => {
        console.error('Login Error: ', error);
      });
  };
}

export default Login;
