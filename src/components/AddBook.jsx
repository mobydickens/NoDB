import React, { Component } from 'react';
// import axios from 'axios';
import DropdownBtn from './DropdownBtn.jsx';

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
  
  getBook = () => {
    this.props.addBookFn(this.state)
    this.setState({
        title: "",
        author: "",
        genre: "",
        recommended: ""
    })
  }

  genrePicker = (val) => {
    this.setState({
        genre: val
    })
  }

  render() {

    return (
      <div className="container">
        <main className="add-parent">
            <div className="subtitle">Add a new book to read in your Favorites</div><br/>
            <input 
                type="text" 
                className="form-control"
                placeholder="Title"
                value={ this.state.title } 
                onChange={ (e) => this.setState({ title: e.target.value })} />
            <input 
                type="text" 
                className="form-control"
                placeholder="Author"
                value={ this.state.author } 
                onChange={ (e) => this.setState({ author: e.target.value })} />
            <DropdownBtn genrePickerFn={ this.genrePicker } />
            <input 
                type="text"
                className="form-control"
                placeholder="Recommended by"
                value={ this.state.recommended }  
                onChange={ (e) => this.setState({ recommended: e.target.value })} /><br/>
            <button className="btn btn-primary" onClick={ () => this.getBook()} > Add </button>
            <div>Word of the Day</div>
        </main>
      </div>
    );
  }
}

export default AddBook;
