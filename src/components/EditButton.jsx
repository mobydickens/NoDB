//child of FAVORITES
import React, { Component } from 'react';
import DropdownBtn from './DropdownBtn.jsx';
import axios from 'axios';

class EditButton extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    editBook = () => {
        axios.put('/userbooks/:id').then(res => {
            console.log(res.data)
            // editBookFn(res.data)
        })
    }

    render() {
        return(
            <div>
                <p>
                    <button 
                        className="btn btn-primary" 
                        type="button" 
                        data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Edit
                    </button>
                </p>
                <div 
                className="collapse"   id="collapseExample">
                    <div className="card card-body">
                        <input type="text" value={ this.props.title } />
                        <input type="text" value={ this.props.author } />
                        <DropdownBtn />
                        <input type="text" value={ this.props.recommended } />
                    </div>
                </div> 
            </div>
        )
    }
}

export default EditButton;

//axios call here? Edit would call the BOOK, edit, return RES and send WHOLE response up the chain. 