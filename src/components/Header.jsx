import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div >
        <nav>
            <div>
                <h1 className="nav-title">New Reads</h1>
            </div>
            <div>
                <a className="navigation" href="#">Add new book</a>
                <a className="navigation" href="#">Recommendations</a>
                <a className="navigation" href="#">Favorites</a>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;