import React, { Component } from 'react';

const A = () => (
  <B
    name="Sérgio"
    id={ 55 }
    year={ 1990 }
  />);

class B extends Component {
  render() {
    return <C { ...this.props } />
  }
}

const C = ({ name, id, year }) => (
  <div>
    <div>{ name }</div>
    <div>{ id }</div>
    <div>{ year }</div>
  </div>
);
