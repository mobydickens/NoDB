import React, { Component } from 'react';
import axios from 'axios';

//Completes ONE stateful component
class AddBook extends Component {

  constructor(props) {
    super(props)
        this.state = {
            title: "",
            author: "",
            genre: "",
            recommended: ""
        }
  }

  addBook = (book) => {
    axios
        .post('/books', book)
        .then(res => {
            //need to add a check to see if book is already in 'favorites list'
            alert("your book has been added!");
            this.setState({
                title: "",
                author: "",
                genre: "",
                recommended: ""
            })
        })
  }

  render() {
    return (
      <div >
        <main>
            <div>Add a book to read in Favorites</div>
            <input 
                type="text" 
                placeholder="Title"
                value={ this.state.title } 
                onChange={ (e) => this.setState({ title: e.target.value })} />
            <input 
                type="text" 
                placeholder="Author"
                value={ this.state.author } 
                onChange={ (e) => this.setState({ author: e.target.value })} />
            <input 
                type="text" 
                placeholder="Genre"
                value={ this.state.genre } 
                onChange={ (e) => this.setState({ genre: e.target.value })} />
            <input 
                type="text" 
                placeholder="Recommended by"
                value={ this.state.recommended }  
                onChange={ (e) => this.setState({ recommended: e.target.value })} />
            <button onClick={ () => this.addBook(this.state)} > Add </button>
        </main>
      </div>
    );
  }
}

export default AddBook;
