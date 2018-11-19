import React from 'react';

//Completes one stateless functional component
function Recommendations(props) {

    const classicRecommendations = props.default.map(book => {
        if(book.tags.includes("Classics")) {
            return(
                <div key={book.id} className="mini-book">
                    <a 
                        tabIndex="0" 
                        className="btn btn-lg rec-book-title"
                        role="button" 
                        data-toggle="popover" 
                        data-trigger="focus" 
                        title="Add book to favorites?" 
                        data-content="And here's some amazing content. It's very engaging. Right?">
                        {book.title}
                    </a>
                    <div className="rec-author">by {book.author}</div>
                </div>
            )
        }
    })

    const SciFiRecommendatons = props.default.map(book => {
        if(book.tags.includes("Science Fiction")) {
            return(
                <div key={book.id} className="mini-book">
                    <a 
                        tabIndex="0" 
                        className="btn btn-lg rec-book-title"
                        role="button" 
                        data-toggle="popover" 
                        data-trigger="focus" 
                        title="Add book to favorites?" 
                        data-content="some data">
                        {book.title}
                    </a>
                    <div className="rec-author">by {book.author}</div>
                </div>
            )
        }
    })

    const historyRecommendations = props.default.map(book => {
        if(book.tags.includes("History")) {
            return(
                <div key={book.id} className="mini-book">
                    <a 
                        tabIndex="0" 
                        className="btn btn-lg rec-book-title"
                        role="button" 
                        data-toggle="popover" 
                        data-trigger="focus" 
                        title="Add book to favorites?" 
                        data-content="And here's some amazing content. It's very engaging. Right?">
                        {book.title}
                    </a>
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
                className="btn btn-secondary"
                onClick={ () => props.handleChange() }>
                Click to add your own book to favorites!
            </button>
        </div>
      </div>
    );
}

export default Recommendations;


