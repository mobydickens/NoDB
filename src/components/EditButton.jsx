//child of FAVORITES
import React, { Component } from 'react';
import axios from 'axios';
import toastr from 'toastr';

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
        if(this.state.title === "") {
            toastr.options.positionClass = "toast-bottom-right";
            toastr.error(`Title cannot be blank`);
            return;
        } else if (this.state.author === "") {
            toastr.options.positionClass = "toast-bottom-right";
            toastr.error(`Author cannot be blank`);
            return;
        }
        axios.put(`/userbooks/${this.state.id}`, this.state).then(res => {
            this.props.editBookFn(res.data)
        })
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <div className="favorite-child-btn">
                    <button
                        type="button"
                        className="btn btn-primary fav-child-btn"
                        data-toggle="modal"
                        data-target={"#book" + this.state.id}>
                        Edit
                </button>
                </div>

                <div
                    className="modal fade"
                    id={"book" + this.state.id}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Edit Book</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="card card-body" id={"book" + this.state.id}>

                                    <div className="form-group">
                                        <label htmlFor="edit">Title</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.title || ""}
                                            onChange={(e) => this.setState({ title: e.target.value })} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="edit1">Author</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.author || ""}
                                            onChange={(e) => this.setState({ author: e.target.value })} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="edit2">Genre</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.genre || ""}
                                            onChange={(e) => this.setState({ genre: e.target.value })} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="edit3">Recommended by</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.recommended || ""}
                                            onChange={(e) => this.setState({ recommended: e.target.value || "" })} />
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        data-dismiss="modal"
                                        onClick={() => this.editBook()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default EditButton;




