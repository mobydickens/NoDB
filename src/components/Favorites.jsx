//Child of APP

import React, { Component } from 'react';
import EditButton from './EditButton.jsx';
import DeleteBtn from './DeleteBtn.jsx';

class Favorites extends Component {

    render() {
        const book = this.props.userBooklist.map(book => {
            //need to check if list is EMPTY, and return a prompt if so (maybe a button to take you to the AddBook Page)
            return(
                <div className="book" key={book.id}>
                    <div>{book.title}</div><br/>
                     by 
                    <div>{book.author}</div>
                    {!book.genre ? "" : <div>{book.genre}</div>}
                    {!book.recommended ? "" : <div>Recommended by: {book.recommended}</div>}
                    <div className="favorite-btn">
                        <DeleteBtn 
                            deleteBookFn={ this.props.deleteBookFn}
                            id={ book.id }/>
                        <EditButton 
                            title={ book.title }
                            author={ book.author }
                            recommended={ book.recommended }
                            id={ book.id }
                            editBookFn={ this.props.editBookFn }/>
                    </div>
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
