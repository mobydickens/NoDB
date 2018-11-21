//child of Favorites
import React, { Component } from 'react'
import axios from 'axios';


class DeleteBtn extends Component {


    confirmDelete = () => {
        if(window.confirm("Are you sure?")) {
            this.deletebook();
        };
    }

    deletebook = () => {
        axios.delete(`/userbooks?id=${ this.props.id }`)
            .then(res => {
                this.props.deleteBookFn(res.data)
            })
    }
    render() {
    return(
        <div className="favorite-child-btn one">
            <button 
                className="btn btn-primary fav-child-btn" 
                type="button"
                onClick={ () => this.confirmDelete() }>
                Delete
            </button>
        </div>
    )}
}

export default DeleteBtn;