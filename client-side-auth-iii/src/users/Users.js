import React from "react";
import axios from "axios";

class Users extends React.Component {
    state = {
        users: []
    }

    render() {
        if (!this.state.users) {
            return <h3>Please login to see the users</h3>;
        } else {
            return (
                <div>
                    <h2>List of Users</h2>
                    <ul>
                        {this.state.users.map(u => (<li key={u.id}>{u.username}</li>))}
                    </ul>
                </div>
            );
        }

    }

    componentDidMount() {
        const endpoint = 'http://localhost:4000/api/users/';
        const token = localStorage.getItem('token');

        const reqOptions = {
            headers: {
                authorization: token,
            }
        };

        axios
            .get(endpoint, reqOptions)
            .then(res => {
                console.log(res);
                this.setState({ users: res.data });
            })
            .catch(error => {
                console.log(error);
                console.error(error);
            });
    }   
}

export default Users;
