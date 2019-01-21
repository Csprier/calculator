import React, { Component } from 'react';
import './css/button.css';

class Button extends Component {
  render() {
    return (
      <div 
        className="btn"
        onClick={this.props.onClick}
        data-size={this.props.size}
        data-value={this.props.value}
      >
        {this.props.label}
      </div>
    );
  }
}

export default Button;