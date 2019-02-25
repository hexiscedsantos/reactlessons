import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users, onUserClick }) => {
  const list = users.map((user, index) => {
    return (
      <li key={index} onClick={() => onUserClick(index)}>
        <Link to={`/user/${index}`}> {user.login}</Link>
      </li>
    );
  })

  const hasItems = list.length > 0;
  return hasItems ? (
    <ul>
      {list}
    </ul>) : null;
};

export default UsersList;