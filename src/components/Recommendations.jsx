import React from 'react';


function Recommendations(props) {

    const recommendations = props.default.map(book => {
        return(
            <div key={book.id}>{book.title}</div>
        )
    })

    return (
      <div className="container">
          <main>
              <div className="rec-box">{recommendations}</div>
              <div className="rec-box">{}</div>
              <div className="rec-box">{}</div>
          </main>
      </div>
    );
}

export default Recommendations;


