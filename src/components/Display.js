import React, { Component } from 'react';
import './css/display.css';

class Display extends Component {
  render() {
    // console.log('Display this.props: ', this.props.data);
    const equation = this.props.data.join('');
    // console.log(`Equation: ${equation}`);
    return (
      <div className="display-container">
        <div className="display">{equation}</div>  
      </div>
    );
  }
}

export default Display;