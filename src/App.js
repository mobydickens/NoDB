import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Recommendations from './components/Recommendations.jsx';
import AddBook from './components/AddBook.jsx';
import Favorites from './components/Favorites.jsx';


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
        {this.state.route === "Recommendations" ? <Recommendations /> : null }
        {this.state.route === "Add new book" ? <AddBook /> : null }
        {this.state.route === "Favorites" ? <Favorites /> : null }
      </div>
    );
  }
}

export default App;
