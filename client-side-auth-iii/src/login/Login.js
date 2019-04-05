import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "tico",
    password: "thep"
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="username">
                Username: 
                <input
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                type="text"
                />
            </label>
          </div>
          <div>
            <label htmlFor="password">
                Password: 
                <input
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                />
            </label>
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:4000/api/auth/login';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);

        this.props.history.push('/users');
      })
      .catch(error => console.error(error));
  };
}

export default Login;
