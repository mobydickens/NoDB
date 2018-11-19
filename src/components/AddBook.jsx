import React, { Component } from 'react';
import DropdownBtn from './DropdownBtn.jsx';
import axios from 'axios';

//Completes ONE stateful component
class AddBook extends Component {

  constructor(props) {
    super(props)
        this.state = {
            title: "",
            author: "",
            genre: "",
            recommended: "",
            quoteOfTheDay: "",
            authorOfQuote: ""
        }
  }
  
componentDidMount() {
    axios.get("http://quotes.rest/qod.json").then(res => {
        this.setState({
            quoteOfTheDay: res.data.contents.quotes[0].quote,
            authorOfQuote: res.data.contents.quotes[0].author
        })   
    })
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
            <div className="dictionary-title">Quote of the Day</div>
            <div>{ this.state.quoteOfTheDay }</div>
            <div>~ { this.state.authorOfQuote }</div>
        </main>
      </div>
    );
  }
}

export default AddBook;
