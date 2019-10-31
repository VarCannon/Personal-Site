import React from 'react';
import './App.css';
import Nav from './NavigationBar.jsx'

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
        <Nav />
        <header className="App-header">
          Trevor Cannon
        </header>
      </div>
    )
  }
}

export default App;
