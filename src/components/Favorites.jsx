import React, { Component } from 'react';
import axios from 'axios';

class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }
    
    componentDidMount() {
// need to change this so it rerenders after changes
        axios.get('/userList').then(res => {
            // console.log(res.data);
            this.setState({
                userList: res.data
            })
        })
    }
 
    render() {
        const book = this.state.userList.map(book => {
            //need to check if list is EMPTY, and return a prompt if so (maybe a button to take you to the AddBook Page)
            return(
                <div className="book" key={book.id}>
                    <div>{book.title} by {book.author}</div>
                    <div>{book.genre}</div>
                    <div>{book.recommended}</div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>)
        })

        return (
            
        <div >
            <h3>Favorites</h3>
            <h5>To read</h5>
            <div className="book-parent">
                {book}
            </div>
        </div>
        );
    }
}

export default Favorites;
