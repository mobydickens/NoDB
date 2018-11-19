import React from 'react';

//Completes one stateless functional component
function Recommendations(props) {

    const recommendations = props.default.map(book => {
        return(
            <div key={book.id}>{book.title}</div>
        )
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
            <div className="rec-box">{recommendations}</div>
            <div className="rec-box">{}</div>
            <div className="rec-box">{}</div>
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


