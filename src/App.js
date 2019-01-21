import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
