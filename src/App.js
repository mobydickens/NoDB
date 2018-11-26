import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import toastr from 'toastr';
import '../node_modules/toastr/build/toastr.css';
import Recommendations from './components/Recommendations.jsx';
import AddBook from './components/AddBook.jsx';
import Favorites from './components/Favorites.jsx';

import routes from './routes.js';
import {Link} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      route: "Recommendations",
      booklist: [],
      activeButton: "rec"
    }
  }

 //GET upon render, sets state with default list of books from default and user lists sent from server
 componentDidMount() {
    axios
      .get('/books')
      .then(res => {
        this.setState({
          booklist: res.data
      })
    })
  }

  //adds book to favorites list either from recommendations or add book page
  addBook = (book) => {
    if(book.favorites !== true) {
      axios
        .post('/books', book)
        .then(res => {

          // need to add a check to see if book is already in 'favorites list'
          // need to add check to see if any input boxes are empty
          toastr.options.positionClass = "toast-bottom-right";
          toastr.success(`${book.title} has been added to your to-read list`, "Success!");
          this.setState({
            booklist: res.data
        })
      })
    }
  }
  //any book edit results come here to update state
  editBook = (edited) => {
    this.setState({
      booklist: edited
    })
  }
  //any book delete results come here to update state
  deleteBook = (edited) => {
    this.setState({
      booklist: edited
    })
  }

  //these handle page changes and background color on nav buttons
  handleChangeRecommendations = () => {
    this.setState({ 
      route: "Recommendations",
      activeButton: "rec"
      })
  }
  //this changes "route" on state to show correct page
  handleChangeAdd = () => {
    this.setState({ 
      route: "Add new book",
      activeButton: "add"
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
            {/* below controls what class is active on navbar */}
            <button
              name="rec" 
              className={ this.state.activeButton === "rec" 
                ? "btn btn-primary nav-button active" 
                : "btn btn-primary nav-button"}
              onClick={ () => this.handleChangeRecommendations() }>
              Recommendations
            </button>
            <button
              name="add" 
              className={this.state.activeButton === "add" 
              ? "btn btn-primary nav-button active" 
              : "btn btn-primary nav-button"}
              onClick={ () =>  this.handleChangeAdd() }>
              Add new book
            </button>
            <button
              name="fav" 
              className={this.state.activeButton === "fav" 
              ? "btn btn-primary nav-button active" 
              : "btn btn-primary nav-button"}
              onClick={ () => this.setState({ 
                route: "Favorites",
                activeButton: "fav" 
                })}>
              Favorites
            </button>
          </div>
        </nav>
        {/* below controls which page shows with state */}
        {this.state.route === "Recommendations" 
          ? <Recommendations 
              booklist={ this.state.booklist }
              handleChange={ this.handleChangeAdd }
              addBookFn={ this.addBook }
              editBookFn={ this.editBook }
            /> : null }
        {this.state.route === "Add new book" 
          ? <AddBook 
              route={ this.state.route }
              booklist={ this.state.booklist }
              addBookFn={ this.addBook }
            /> : null }
        {this.state.route === "Favorites" 
          ? <Favorites 
              booklist={ this.state.booklist }
              editBookFn={ this.editBook }
              deleteBookFn={ this.deleteBook }
              handleChange={ this.handleChangeAdd } /> : null }
      </div>
    );
  }
}

export default App;


//need an edit button function that will take in the new values
//pass THAT down to favorites, who will pass it right through to EDIT BUTTON. BUtton will run that function in its own function and pass value back as it's return. 