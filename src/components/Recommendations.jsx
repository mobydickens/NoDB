import React, { Component } from 'react';

//Completes one stateless functional component
class Recommendations extends Component {

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
        
       
        return booksByTag.filter(obj => obj.books.length >= 10);
    }

    render() { 
        let tags = this.groupBooksByTag(this.props.default);

        return (
            <div className="container">
                <div className="rec-title">
                    <h1 className="new-reads">New Reads</h1>
                    <div className="subtitle main-subtitle">
                        Get started with a premade list, or start your own
                    </div>
                </div>
                <main className="rec-box-parent">

                    {tags.map(obj => {
                        return (
                            <div className="rec-box">
                                <div className="browse">Browse {obj.tag}</div>
                                    <div className="rec-booklist">
                                    {obj.books.map(book => {
                                        return (<div className="book-img-parent">
                                            <div className="mini-book">
                                                <div>{ book.title }</div>
                                                <div className="rec-author">by {book.author}</div>
                                                <a 
                                                    href="#" 
                                                    className="badge badge-dark"
                                                    onClick={ () => this.props.addBookFn(book) }>Add
                                                </a>
                                            </div>
                                            <img className="book-img" src={`/covers/${book.id}`} alt={book.id}/>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                        // for(let i=0; i<obj.length; i++) {

                        // }
                    })}
                </main>
                <div className="rec-button-parent">
                    <button 
                        type="button" 
                        className="btn btn-secondary main-button"
                        onClick={ () => this.props.handleChange() }>
                        Click to add your own book to favorites!
                    </button>
                </div>
            </div>
        );
    }
}

export default Recommendations;


