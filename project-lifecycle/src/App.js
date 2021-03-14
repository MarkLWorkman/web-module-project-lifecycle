import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  return (
    <div>
      <h1> User Cards</h1>
      <UserCard />
      <FollowerCard />
    </div>
  )
}

export default App;