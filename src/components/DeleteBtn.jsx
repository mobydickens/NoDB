//child of Favorites
import React, { Component } from 'react'
import axios from 'axios';


class DeleteBtn extends Component {

    deletebook = () => {
        console.log(this.props.id)
        axios.delete(`/userbooks?id=${ this.props.id }`)
            .then(res => {
                console.log(res);
                this.props.deleteBookFn(res.data)
            })
    }
    render() {
    return(
        <div className="favorite-child-btn">
            <button 
                className="btn btn-primary fav-child-btn" 
                type="button"
                onClick={ () => this.deletebook() }>
                Delete
            </button>
        </div>
    )}
}

export default DeleteBtn;