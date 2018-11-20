//child of Favorites
import React, { Component } from 'react'
import axios from 'axios';


class DeleteBtn extends Component {

    deletebook = () => {
        console.log("is delete book running?")
        axios.delete(`/userbooks?id=${ this.props.id }`)
            .then(res => {
                console.log(res.data);
                this.props.deleteBookFn(res.data)
            })
    }
    render() {
    return(
        <div className="favorite-child-btn one">
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