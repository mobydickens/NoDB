import React, { Component } from 'react';
import DropdownBtn from './DropdownBtn.jsx';
import axios from 'axios';
import toastr from 'toastr';

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
    if(this.state.title === "") {
        toastr.options.positionClass = "toast-bottom-right";
        toastr.error(`Title is required`);
        return;
    } else if (this.state.author === "") {
        toastr.options.positionClass = "toast-bottom-right";
        toastr.error(`Author is required`);
        return;
    } 
    for(let i=0; i< this.props.booklist.length; i++) {
        if(this.props.booklist[i].title === this.state.title && this.props.booklist[i].author === this.state.author) {
        toastr.options.positionClass = "toast-bottom-right";
        toastr.error(`You already added that book!`);
        this.setState({
            title: "",
            author: "",
            genre: "",
            recommended: ""
        })
        return;
        }
    }
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
        <div className="subtitle">Add a book to your to-read list!</div><br/>
        <main className="add-parent">
            <div className="addbook-box">
                <input 
                    type="text" 
                    className={this.state.title === "" ? "form-control is-invalid" : "form-control is-valid"}
                    placeholder="Title"
                    value={ this.state.title } 
                    onChange={ (e) => this.setState({ title: e.target.value })} />
                <input 
                    type="text" 
                    className={this.state.author === "" ? "form-control is-invalid" : "form-control is-valid"}
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
                <button className="btn btn-primary add" onClick={ () => this.getBook()} > Add </button>
            </div>
            <div className="quote">{ this.state.quoteOfTheDay }</div>
            <div className="quote quote-author">~ { this.state.authorOfQuote }</div>
        </main>
      </div>
    );
  }
}

export default AddBook;
