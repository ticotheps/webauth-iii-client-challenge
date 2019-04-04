import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "tico",
    password: "blue"
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit="this.handleSubmit">
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              value="this.state.username"
              onChange="this.handleInputChange"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="password"
              value="this.state.password"
              onChange="this.handleInputChange"
              type="password"
            />
          </div>
        </form>
      </div>
    );
  }

  handleInputChange = event => {
    const { id, value } = event.target;

    this.setState = { [id]: value };
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:4000/api/auth/login";

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);

        this.props.history.push("/users");
      })
      .catch(error => console.error(error));
  };
}

export default Login;
