import React, { Component } from 'react';
import './App.css';
import Recommendations from './components/Recommendations.jsx';
import AddBook from './components/AddBook.jsx';
import Favorites from './components/Favorites.jsx';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      route: "Favorites",
      default: []
    }
  }

 //GET upon render, sets state with default list of books sent from server
 componentDidMount() {
  axios
    .get('/books')
    .then(res => {
        this.setState({
            default: res.data
        })
    })
  }

  render() {
    return (
      <div >
        <nav>
          <div>
            <h1 className="nav-title">New Reads</h1>
          </div>
          <div>
            <button 
              className="nav-button" 
              onClick={ () => this.setState({ route: "Add new book" }) }>
              Add new book
            </button>
            <button 
              className="nav-button" 
              onClick={ () => this.setState({ route: "Recommendations" }) }>
              Recommendations
            </button>
            <button 
              className="nav-button" 
              onClick={ () => this.setState({ route: "Favorites" })}>
              Favorites
            </button>
          </div>
        </nav>
        {this.state.route === "Recommendations" ? <Recommendations default={ this.state.default } /> : null }
        {this.state.route === "Add new book" ? <AddBook /> : null }
        {this.state.route === "Favorites" ? <Favorites /> : null }
      </div>
    );
  }
}

export default App;
