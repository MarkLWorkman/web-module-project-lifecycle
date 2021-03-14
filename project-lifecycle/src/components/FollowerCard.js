import React, { Component } from 'react';
import axios from 'axios';

class FollowerCard extends Component {
    state= {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/MarkLWorkman/followers')
        .then(response => {
            this.setState({
                followers: response.data
            })
        })
        .catch(error => console.log(error));
    }

    render() {
        const { followers } = this.state;
        if (followers.length === 0) return <p>
        Looking up followers
        </p>
        return (
            <div className='followers-wrapper'>
                {followers.map(follower => (
                    <div key={follower.id} className='follower-card'>
                    <img style={{ width: '80px', borderRadius: '50%' }}
                    src={follower.avatar_url}
                    alt={follower.login} />
                    <h4>{follower.login}</h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default FollowerCard;