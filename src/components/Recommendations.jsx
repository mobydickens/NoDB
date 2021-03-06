import React, { Component } from 'react';
import toastr from 'toastr';
import axios from 'axios';
import AddBookBtn from './addBookBtn.jsx';

//Completes one stateless functional component
class Recommendations extends Component {

    //This function was made so I could filter books by tag and print appropriately on the recommendations page
    groupBooksByTag = (books) => {
        //first get all of the tags in default booklist
        let tagList = [];
        let booksByTag = [];
        
        for(let i = 0; i<books.length; i++) {
            if(!books[i].tags) {
                continue;
            }
            for(let j = 0; j<books[i].tags.length; j++) {
                let tag = books[i].tags[j];
                if(!tagList.includes(tag)) {
                    tagList.push(tag);
                } 
            }
        }
        for(let i = 0; i<tagList.length; i++) {
            booksByTag.push({ 
                tag: tagList[i],
                books: books.filter(book => book.tags && book.tags.includes(tagList[i]))
            })
        }
        return booksByTag.filter(obj => obj.books.length >= 5);
    }

    editRecommendedBook = (book) => {
        if(book.favorites === true) {
            toastr.options.positionClass = "toast-bottom-right";
            toastr.error("You already added that book!")
            return;
        } else {
            axios.put(`/userbooks/${book.id}`, book).then(res => {
                this.props.editBookFn(res.data) 
            })
        }
        toastr.options.positionClass = "toast-bottom-right";
        toastr.success(`${book.title} has been added to your to-read list`, "Success!");
    }

    render() { 
        let tags = this.groupBooksByTag(this.props.booklist);
        return (
            <div className="container">
                <div className="rec-title">
                    <h1 className="new-reads">New Reads</h1>
                    <div className="subtitle main-subtitle">
                        Get started with a premade list, or start your own!
                    </div>
                </div>
                <main className="rec-box-parent">

                    {tags.map((obj, i) => {
                        return (
                            <div key={i} className="rec-box">
                                <div className="browse">Browse {obj.tag}</div>
                                    <div className="rec-booklist">
                                    {obj.books.map(book => {
                                        if(book.favorites === false) {
                                        return (<div key={book.id} className="book-img-parent">
                                            <div className="mini-book">
                                                <div>{ book.title }</div>
                                                <div className="rec-author">by {book.author}</div>
                                                <button 
                                                    className={book.read === false ? "badge badge-dark" : "badge badge-read"}
                                                    onClick={ () => this.editRecommendedBook(book) }>Add
                                                </button>
                                            </div>
                                            <img className="book-img" src={`/covers/${book.id}`} alt={book.id}/>
                                        </div>
                                        )
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </main>
                <div className="rec-button-parent">
                    <AddBookBtn handleChange={ this.props.handleChange }/>
                </div>
            </div>
        );
    }
}

export default Recommendations;


