import React from 'react';
import axios from 'axios';
import requiresAuth from '../requiresAuth/requiresAuth';

class Users extends React.Component {
    state = {
        users: []
    };

    render() {
        return (
            <div>
                <h2>List of Users</h2>
                <ul>
                    {this.state.users.map(u => (
                        <li key={u.id}>{u.username}</li> 
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/api/users';
        const token = localStorage.getItem('jwt');

        const requestConfig = {
            headers: {
                authorization: token,
            }
        };

        axios.get(endpoint, requestConfig).then(res => {
            this.setState({ users: res.data.users })
        });
    }
}

export default requiresAuth(Users);