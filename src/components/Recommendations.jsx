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
            <h4 className="subtitle">
                A better place find and save your to-read books
            </h4>
        </div>
        <main>
            <div className="rec-box">{recommendations}</div>
            <div className="rec-box">{}</div>
            <div className="rec-box">{}</div>
        </main>
      </div>
    );
}

export default Recommendations;


