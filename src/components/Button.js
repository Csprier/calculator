import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <div className="btn">{this.props.children}</div>
  }
}

export default Button;