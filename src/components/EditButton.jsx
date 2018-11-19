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
                    className="modal fade"
                    id={ "book" + this.state.id }
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                <div className="modal-body">
                    <div className="card card-body" id={ "book" + this.state.id }>

                        <div className="form-group">
                            <label htmlFor="edit">Title</label>
                            <input 
                                className="form-control"
                                type="text"
                                value={ this.state.title || ""}
                                onChange={ (e) => this.setState({ title: e.target.value }) } />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="edit1">Author</label>
                            <input 
                                className="form-control"
                                type="text" 
                                value={ this.state.author || ""}
                                onChange={ (e) => this.setState({ author: e.target.value }) } />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="edit2">Genre</label>
                            <input 
                                className="form-control"
                                type="text" 
                                value={ this.state.genre || ""}
                                onChange={ (e) => this.setState({ genre: e.target.value })} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="edit3">Recommended by...</label>
                            <input 
                                className="form-control"
                                type="text" 
                                value={ this.state.recommended || ""}
                                onChange={ (e) => this.setState({ recommended: e.target.value || "" })} />
                        </div>
                        <button
                            className="btn btn-secondary" 
                            onClick={ () => this.editBook() }>
                            Save
                        </button>
                    </div>
                </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditButton;
                  
                


