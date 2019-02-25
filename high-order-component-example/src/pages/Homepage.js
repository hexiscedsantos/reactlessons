import React, { Fragment } from 'react';
import Input from '../components/Input';
import UsersList from '../components/UsersList';
import SubmitSearch from '../components/UserSearchSubmit';

const userSearch = () => {
  return (
    <div>
      <Input/>
      <SubmitSearch text="Go!" />
    </div>
  )
}

export default () => {
  return (
    <>
      {userSearch()}
      <UsersList/>
    </>
  );
}