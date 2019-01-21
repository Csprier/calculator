import React, { Component } from 'react';
import './css/calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      operations: []
    }
  }

  render() {
    return(
      <div className="calculator-container">
        <div className="calculator">

        </div>
      </div>
    );
  }
}

export default Calculator;