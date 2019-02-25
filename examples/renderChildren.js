import React from 'react';

const A = () => (
  <B>
    <C key={1} />
    <C key={2} />
    <C key={3} />
  </B>);

const B = ({ children }) => (<ul>{ children.map(t => <li>{t}</li>) }</ul>);

const C = () => (<span>Hello world!</span>);
