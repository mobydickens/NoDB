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
        <div className="rec-title">
          <h1 className="title new-reads">New Reads</h1>
          <h4 className="subtitle">
            A better place find and save your to-read books
          </h4>
        </div>
        {this.state.route === "Recommendations" ? <Recommendations /> : null }
        {this.state.route === "Add new book" ? <AddBook /> : null }
        {this.state.route === "Favorites" ? <Favorites /> : null }
      </div>
    );
  }
}

export default App;
