import React from 'react';

const UserDetails = ({user}) => {
  return user ? (
  <div>
    <img src={user.avatar_url} />
    <div>
      <label>GitHub User Id:</label>
      <span>{user.login}</span>
    </div>
    
  </div>) : null;
};

export default UserDetails;