import React from 'react';

//Completes one stateless functional component
function Recommendations(props) {

    const classicRecommendations = props.default.map(book => {
        if(book.tags.includes("Classics")) {
            return(
                <div key={book.id} className="mini-book">
                    <div>{ book.title }</div>
                    <div className="rec-author">by {book.author}</div>
                    <a 
                        href="#" 
                        className="badge badge-dark"
                        onClick={ () => props.addBookFn(book) }
                    >Add</a>
                </div>
            )
        }
    })

    const SciFiRecommendatons = props.default.map(book => {
        if(book.tags.includes("Science Fiction")) {
            return(
                <div key={book.id} className="mini-book">
                    <div>{ book.title }</div>
                    <div className="rec-author">by {book.author}</div>
                    <a 
                        href="#" 
                        className="badge badge-dark"
                        onClick={ () => props.addBookFn(book) }
                    >Add</a>
                </div>
            )
        }
    })

    const historyRecommendations = props.default.map(book => {
        if(book.tags.includes("History")) {
            return(
                <div key={book.id} className="mini-book">
                    <div>{ book.title }</div>
                    <div className="rec-author">by {book.author}</div>
                    <a 
                        href="#" 
                        className="badge badge-dark"
                        onClick={ () => props.addBookFn(book) }
                    >Add</a>
                </div>
            )
        }
    })
    
    return (
      <div className="container">
        <div className="rec-title">
            <h1 className="new-reads">New Reads</h1>
            <div className="subtitle main-subtitle">
                A place to save your to-read books
            </div>
        </div>
        <main className="rec-box-parent">
            <div className="rec-box">
                <div className="browse">Browse Classics</div>
                {classicRecommendations}
            </div>
            <div className="rec-box">
                <div className="browse">Browse Science Fiction</div>
                {SciFiRecommendatons}
            </div>
            <div className="rec-box">
                <div className="browse">Browse History</div>
                {historyRecommendations}
            </div>
        </main>
        <div className="rec-button-parent">
            <button 
                type="button" 
                className="btn btn-secondary main-button"
                onClick={ () => props.handleChange() }>
                Click to add your own book to favorites!
            </button>
        </div>
      </div>
    );
}

export default Recommendations;


