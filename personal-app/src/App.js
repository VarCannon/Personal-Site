import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: ""
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          Trevor Cannon
        </header>
      </div>
    )
  }
}

export default App;
