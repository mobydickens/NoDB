//Child of APP

import React, { Component } from 'react';
import EditButton from './EditButton.jsx';
import DeleteBtn from './DeleteBtn.jsx';
import axios from 'axios';

class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        }
    }

    handleChange = (book) => {
        if(book.read === false) {
            axios.put(`/read/${book.id}`, book).then(res => {
                this.props.editBookFn(res.data);
            })
        }
    }

    isHidden = () => {
        if(this.state.isHidden === false) {
            this.setState({
                isHidden: true
            })
        } else {
            this.setState({
                isHidden: false
            })
        }
    }
    

    render() {
        const book = this.props.booklist.filter(book => this.state.isHidden === false || book.read === false).map(book => {
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
            <div className="container container1">
                <div className="subtitle">To-read books in favorites</div>
                <p 
                    onClick={ () => this.isHidden() }
                    className="hidden text-primary">
                    {this.state.isHidden === false ? "Hide read books" : "Show read books"}
                </p>
                <div 
                    className="favorites-parent">
                    {book.reverse()}
                </div>
            </div>
        );
    }
}

export default Favorites;
