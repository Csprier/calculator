import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ReactJS Calculator</h1>
        </header>
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
