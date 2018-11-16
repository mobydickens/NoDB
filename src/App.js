import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      route: ""
    }
  }
  render() {
    return (
      <div >
        <Header />
      </div>
    );
  }
}

export default App;
