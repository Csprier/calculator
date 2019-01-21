import React, { Component } from 'react';
import './css/display.css';

class Display extends Component {
  render() {
    const equation = this.props.data.join('');
    return (
      <div className="display">{equation}</div>
    );
  }
}

export default Display;