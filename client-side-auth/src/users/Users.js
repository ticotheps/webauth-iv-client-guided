import React from 'react';
import axios from 'axios';

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

        axios.get(endpoint).then(res => {
            this.setState({ users: res.data.users })
        });
    }
}

export default Users;