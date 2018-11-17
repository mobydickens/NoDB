import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Recommendations from './components/Recommendations.jsx';
import AddBook from './components/AddBook.jsx';
import Favorites from './components/Favorites.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      route: "Favorites",
      default: [],
      userBooklist: []
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
  
  addBook = (book) => {
    axios
      .post('/books', book)
      .then(res => {
        //need to add a check to see if book is already in 'favorites list'
        //need to add check to see if any input boxes are empty
        // console.log("axios response", res)
        alert("your book has been added!");
        this.setState({
          userBooklist: res.data
        })
      })
  }

  render() {
    return (
      <div >
        <nav className="navbar navbar-dark bg-primary">
          <div>
            <h1 className="navbar-brand">New Reads</h1>
          </div>
          <div>
            <button 
              className="btn btn-primary nav-button" 
              onClick={ () => this.setState({ route: "Recommendations" }) }>
              Recommendations
            </button>
            <button 
              className="btn btn-primary nav-button" 
              onClick={ () => this.setState({ route: "Add new book" }) }>
              Add new book
            </button>
            <button 
              className="btn btn-primary nav-button" 
              onClick={ () => this.setState({ route: "Favorites" })}>
              Favorites
            </button>
          </div>
        </nav>
        {this.state.route === "Recommendations" 
          ? <Recommendations 
              default={ this.state.default } 
            /> : null }
        {this.state.route === "Add new book" 
          ? <AddBook 
              route={ this.state.route }
              userBooklist={ this.state.userBooklist }
              addBookFn={ this.addBook }
            /> : null }
        {this.state.route === "Favorites" 
          ? <Favorites /> : null }
      </div>
    );
  }
}

export default App;
