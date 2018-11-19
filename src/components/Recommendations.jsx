import React from 'react';

//Completes one stateless functional component
function Recommendations(props) {

    const classicRecommendations = props.default.map(book => {
        if(book.tags.includes("Classics")) {
            return(
                <div className="mini-book">
                    <div key={book.id} className="rec-book-title">{book.title}</div>
                    <div className="rec-author">by {book.author}</div>
                </div>
            )
        }
    })

    const SciFiRecommendatons = props.default.map(book => {
        if(book.tags.includes("Science Fiction")) {
            return(
                <div className="mini-book">
                    <div key={book.id} className="rec-book-title">{book.title}</div>
                    <div className="rec-author">by {book.author}</div>
                </div>
            )
        }
    })

    const historyRecommendations = props.default.map(book => {
        if(book.tags.includes("History")) {
            return(
                <div className="mini-book">
                    <div key={book.id} className="rec-book-title">{book.title}</div>
                    <div className="rec-author">by {book.author}</div>
                </div>
            )
        }
    })
    

    return (
      <div className="container">
        <div className="rec-title">
            <h1 className="title new-reads">New Reads</h1>
            <div className="subtitle">
                A better place find and save your to-read books
            </div>
        </div>
        <main className="rec-box-parent">
            <div className="rec-box">{classicRecommendations}</div>
            <div className="rec-box">{SciFiRecommendatons}</div>
            <div className="rec-box">{historyRecommendations}</div>
        </main>
        <div className="rec-button-parent">
            <button 
                type="button" 
                className="btn btn-secondary">
                Click to add your own book to favorites!
            </button>
        </div>
      </div>
    );
}

export default Recommendations;


