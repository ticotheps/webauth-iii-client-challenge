import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>
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
            <label htmlFor="department">
                Department: 
                <input
                name="department"
                id="department"
                value={this.state.department}
                onChange={this.handleInputChange}
                type="text"
                />
            </label>
          </div>

          <div>
            <button type="submit">Register</button>
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

    const endpoint = 'http://localhost:4000/api/auth/register';

    axios
      .post(endpoint, this.state)
      .then(res => {
        // localStorage.setItem("token", res.data.token);

        this.props.history.push('/login');
      })
      .catch(error => console.error(error));
  };
}

export default Signup;