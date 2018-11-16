import React, { Component } from 'react';
import axios from 'axios';

class Recommendations extends Component {

  constructor(props) {
    super(props)
    this.state = {
        default: []
    }
  }

  //first GET upon render
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
      const recommendations = this.state.default.map(book => {
          return(
              <div key={book.id}>{book.title}</div>
          )
      })

    return (
      <div className="container">
          <main>
              <div className="rec-box">{recommendations}</div>
              <div className="rec-box">{}</div>
              <div className="rec-box">{}</div>
          </main>
      </div>
    );
  }
}

export default Recommendations;

//so if in each recommendation box I want to have a single BOOK, where would I put state? ...
