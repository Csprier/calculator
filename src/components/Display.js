import React, { Component } from 'react';

class Display extends Component {
  render() {
    const equation = this.props.data.join('');
    return (
      <div className="display">{equation}</div>
    );
  }
}

export default Display;