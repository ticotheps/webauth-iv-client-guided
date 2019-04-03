import React from 'react';

class Users extends React.Component {
    state = {
        users: []
    }

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
}

export default Users;