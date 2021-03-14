import React, { Component } from 'react';
import axios from 'axios';

class UserCard extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        axios.get('https://api.github.com/users/MarkLWorkman')
        .then(res => {
            this.setState({
                user: res.data
            });
        })
        .catch(error => {
            console.log(error)
        });
    };

    render() {
        const { user } = this.state;
        if (!this.state.user) return <p>Finding User...</p>
        return (
            <div>
                <img style = {{ width: '150px', borderRadius: '50%'}}
                src={user.avatar_url}
                alt={user.name} />
                <h3>{user.name}</h3>
                <p>username: {user.login}</p>
            </div>
        )
    }
}

export default UserCard;