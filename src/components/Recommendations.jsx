import React, { Component } from 'react';

class Recommendations extends Component {

  constructor(props) {
    super(props)
  }

  

  render() {
    return (
      <div className="container">
          <main>
              <div className="rec-box"></div>
              <div className="rec-box"></div>
              <div className="rec-box"></div>
          </main>
      </div>
    );
  }
}

export default Recommendations;
