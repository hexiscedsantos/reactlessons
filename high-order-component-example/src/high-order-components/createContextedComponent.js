import React, { Component } from 'react';

export default (ComponentToWrap, contextToAdd) => {

  return class extends Component{
    static contextType = contextToAdd;

    render() {
      const mergedProps = {
        ...this.props,
        ...this.context
      };

      return (<ComponentToWrap {...mergedProps} />)
    }
  }
}
