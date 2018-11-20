//Child of APP

import React, { Component } from 'react';
import EditButton from './EditButton.jsx';
import DeleteBtn from './DeleteBtn.jsx';

class Favorites extends Component {

    render() {
        const book = this.props.userBooklist.map(book => {
            //need to check if list is EMPTY, and return a prompt if so (maybe a button to take you to the AddBook Page)
            return(
                <div key={book.id} className="parentforfav">
                    <div className="text-box">
                        <div 
                            className="title">
                            {book.title}
                        </div><br/>
                        by 
                        <div
                            className="author">
                            {book.author}
                        </div>
                            {!book.genre ? "" : <div className="genre">{book.genre}</div>}
                            {!book.recommended ? "" : <div className="rec">Recommended by:<br/> {book.recommended}
                        </div>}
                    
                    </div>
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
                    <div 
                        className="book"
                        style={{ backgroundImage: "url(/covers/" + book.id + ")"}}>
                        
                    </div>
                </div>)
        })

        return ( 
            <div className="container">
                <div className="subtitle">To-read books in favorites</div>
                <div className="book-parent">
                    {book.reverse()}
                </div>
            </div>
        );
    }
}

export default Favorites;
