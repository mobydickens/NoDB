//Child of APP

import React, { Component } from 'react';
import EditButton from './EditButton.jsx';
import DeleteBtn from './DeleteBtn.jsx';
import axios from 'axios';

class Favorites extends Component {

    handleChange = (book) => {
        if(book.read === false) {
            axios.put(`/read/${book.id}`, book).then(res => {
                this.props.editBookFn(res.data);
            })
        }
    }
    

    render() {
        const book = this.props.booklist.map(book => {
            if(book.favorites === true) {
                return(
                    <div key={book.id} className="individual-parent">
                        
                        <div className="book-parent">
                            <div 
                                className={book.read === true ? "readtext" : ""}>
                                {book.read === true ? "Read" : ""}
                            </div>
                            <div 
                                className={book.read === true? "read" : ""}>
                            </div>
                            <button 
                                onClick={ () => this.handleChange(book) }
                                className="bookemoji">
                            <span role="img" aria-label="book">📖</span>
                            </button>
                            <div 
                                className="book"
                                style={{ backgroundImage: "url(/covers/" + book.id + ")"}}>
                                
                            </div>
                        </div>
                        <div className="text-box">
                            <div className="book-details">
                                <div 
                                    className="title">
                                    {book.title}
                                </div>
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
                        </div>
                    </div>)
            }
        })

        return ( 
            <div className="container">
                <div className="subtitle">To-read books in favorites</div>
                <div className="favorites-parent">
                    {book.reverse()}
                </div>
            </div>
        );
    }
}

export default Favorites;
