import React, { Component } from 'react';
import './css/calculator.css';

import Button from './Button';
import Display from './Display';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      operations: []
    }
  }

  handleClick = (e) => {
    // Get the value from the button's data-value
    const value = e.target.getAttribute('data-value');
    // console.log('handleClick value: ', value);
    switch (value) {
      case 'clear':
        // clear the array
        this.setState({
          operations: []
        });
        break;
      case 'equal':
        // Calcuate the operation's array equation
        this.calculateOperations();
        break;
      default:
        // add new value to the operations array
        this.setState({
          operations: [...this.state.operations, value]
        });
        break;
    }
  }

  calculateOperations = () => {
    console.log(this.state.operations);
    // let string = this.state.operations.join('');
    let equation = this.state.operations.map(item => {
      if (item !== ('+' || '-' || '*' || '/')) {
        return Number(item);
      } else {
        return item;
      }
    });    
    console.log(equation);
  }

  render() {
    return(
      <div className="calculator-container">
        <div className="calculator">
          <Display data={this.state.operations} />
          <div className="operators">
            <Button onClick={this.handleClick} label="-" value="-" />
            <Button onClick={this.handleClick} label="+" size="2" value="+" />
            <Button onClick={this.handleClick} label="/" value="/" />
            <Button onClick={this.handleClick} label="x" value="*" />
            <Button onClick={this.handleClick} label="." value="." />
            <Button onClick={this.handleClick} label="C" value="clear" />
            <Button onClick={this.handleClick} label="=" size="2" value="equal" />
          </div>

          <div className="numbers">
            <Button onClick={this.handleClick} label="7" value="7" />
            <Button onClick={this.handleClick} label="4" value="4" />
            <Button onClick={this.handleClick} label="1" value="1" />
            <Button onClick={this.handleClick} label="0" value="0" />

            <Button onClick={this.handleClick} label="8" value="8" />
            <Button onClick={this.handleClick} label="5" value="5" />
            <Button onClick={this.handleClick} label="2" value="2" />

            <Button onClick={this.handleClick} label="9" value="9" />
            <Button onClick={this.handleClick} label="6" value="6" />
            <Button onClick={this.handleClick} label="3" value="3" />
            <Button label="" value="null" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;