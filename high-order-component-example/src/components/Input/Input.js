import React from 'react';

export default class Input extends React.Component {
  state = '';

  onChange = (e) => {
    e.persist();
    const inputText = e.target.value;
    this.setState(() => inputText);
    this.props.onChange(inputText);
  }

  render () {
    return (
      <input onChange={this.onChange.bind(this)}></input>
    )
  }
}