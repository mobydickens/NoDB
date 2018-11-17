//Child of APP

import React, { Component } from 'react';
import EditButton from './EditButton.jsx';

class Favorites extends Component {

    render() {
        const book = this.props.userBooklist.map(book => {
            //need to check if list is EMPTY, and return a prompt if so (maybe a button to take you to the AddBook Page)
            return(
                <div className="book" key={book.id}>
                    <div>{book.title} by {book.author}</div>
                    <div>{book.genre}</div>
                    <div>Recommended by {book.recommended}</div>
                    <EditButton 
                        title={ book.title }
                        author={ book.author }
                        recommended={ book.recommended }
                        id={ book.id }
                        editBookFn={ this.props.editBookFn } />
                    {/* <button>Edit</button> */}
                    <button>Delete</button>
                </div>)
        })

        return ( 
        <div className="container">
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
