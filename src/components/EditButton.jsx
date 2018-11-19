//child of FAVORITES
import React, { Component } from 'react';
// import DropdownBtn from './DropdownBtn.jsx';
import axios from 'axios';

class EditButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            author: this.props.author,
            genre: this.props.genre,
            recommended: this.props.recommended,
            id: this.props.id
        }
    }

    editBook = () => {
        axios.put(`/userbooks/${this.state.id}`, this.state).then(res => {
            this.props.editBookFn(res.data)
        })
    }

    render() {
        // console.log(this.state);
        return(
        <div>
            <div className="favorite-child-btn">
               <button 
                    type="button" 
                    class="btn btn-primary fav-child-btn" 
                    data-toggle="modal" 
                    data-target={ "#book" + this.state.id }>
                    Edit
                </button>
            </div>
            
                <div 
                    class="modal fade"
                    id={ "book" + this.state.id }
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditButton;
                  
                


