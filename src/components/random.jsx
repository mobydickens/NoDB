import React, { Component } from 'react';

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: ""
        }
    }

    random = () => {
        let filtered = this.props.booklist.filter(book => book.read === false && book.favorites === true);
        let random = filtered[Math.floor(Math.random() * filtered.length - 1 )];
        this.setState({
            random: random.title + " by " + random.author
        })
    }

    render() {
        return(
            <div>
                <span 
                    className="random hidden text-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModal"
                    onClick={ () => this.random() }>
                Not sure which of your books to read? Pick a random book!
                </span>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Your random book is...</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       {this.state.random}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Random;