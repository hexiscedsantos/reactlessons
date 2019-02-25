import React from 'react';
import { Link } from 'react-router-dom';
import { pagesPaths } from '../../routeConfig';

export default (props) => {
  return (
  <ul>
    <li> <Link to={pagesPaths.homepage}>Home</Link> </li>
    <li> <Link to={pagesPaths.about}>About</Link> </li>
  </ul>)
};