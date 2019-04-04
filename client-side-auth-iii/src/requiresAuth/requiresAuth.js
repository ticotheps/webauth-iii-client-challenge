import React from 'react';
import axios from 'axios';

// This HOC returns a component

// creates a default url so you don't have to hardcode it in each component
axios.defaults.baseURL = 'http://localhost:5000/api';

// tells axios to ALWAYS intercept the request and to do something with it
axios.interceptors.request.use(function(requestConfig) {
    const token = localStorage.getItem('token');
    requestConfig.headers.authorization = token;
    return requestConfig;
});

export default function(Component) {
    return class Authenticated extends React.Component {

        render() {
            const token = localStorage.getItem('token');
            const notLoggedIn = <h3>Please login to see the users</h3>;
            // return axios.create({ headers: { authorization: token } });

            return(
                <div>
                    {token ? <Component {...this.props} /> : notLoggedIn}
                </div>
            );
        }
    }
}