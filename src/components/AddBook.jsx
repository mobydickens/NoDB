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
            <div>Add a book to read in Favorites</div><br/>
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
            <DropdownBtn genrePickerFn={ this.genrePicker } />
            <input 
                type="text"
                placeholder="Recommended by"
                value={ this.state.recommended }  
                onChange={ (e) => this.setState({ recommended: e.target.value })} /><br/>
            <button onClick={ () => this.getBook()} > Add </button>
            {/* <button onClick={  }>Take me to favorites</button> */}
        </main>
      </div>
    );
  }
}

export default AddBook;
