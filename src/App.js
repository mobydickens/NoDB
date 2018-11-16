import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      route: "Recommendations"
    }
  }

  

  render() {
    return (
      <div >
        <Header />
        {this.state.route === "Recommendations" ? <Recommondations /> : null }
        {this.state.route === "Add new book" ? <AddBook /> : null }
        {this.state.route === "Favorites" ? <Favorites /> : null }
      </div>
    );
  }
}

export default App;
