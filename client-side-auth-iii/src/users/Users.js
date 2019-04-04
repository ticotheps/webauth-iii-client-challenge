import React from "react";
import axios from "axios";
import requiresAuth from "../requiresAuth/requiresAuth";

class Users extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    // const endpoint = 'http://localhost:5000/api/users';
    // ^^^No longer need this hardcoded endpoint because of what
    // the axios.defaults.baseURL statement does for us in 'requiresAuth.js' file
    const endpoint = `/users`;

    // Created an 'axios.interceptors.request.use()' statement
    // inside the <requiresAuth /> HOC to take care of what
    // 'requestConfig' did previously (BELOW)
    // --------------------------------------------------
    // const token = localStorage.getItem('jwt');
    // const requestConfig = {
    //     headers: {
    //         authorization: token,
    //     }
    // };

    axios
        .get(endpoint)
        .then(res => {
            this.setState({ users: res.data });
        })
        .catch(error => {
            console.error('Users error', error);
        });
  }
}

// export default Users;
export default requiresAuth(Users);
