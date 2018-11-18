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

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title 
                || this.props.author !== prevProps.author
                || this.props.genre !== prevProps.genre
                || this.props.recommended !== prevProps.recommended
                ) {
            this.setState({
                title: this.props.title,
                author: this.props.author,
                genre: this.props.genre,
                recommended: this.props.recommended,
                id: this.props.id
            })
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
                <p>
                    <button 
                        className="btn btn-primary" 
                        type="button" 
                        data-toggle="collapse" data-target={ "#book" + this.state.id } aria-expanded="false" aria-controls={ "book" + this.state.id } >
                        Edit
                    </button>
                </p>
                <div 
                className="collapse"   id={ "book" + this.state.id } >
                    <div className="card card-body">
                        <input 
                            type="text"
                            value={ this.state.title || ""}
                            onChange={ (e) => this.setState({ title: e.target.value }) } />
                        <input 
                            type="text" 
                            value={ this.state.author || ""}
                            onChange={ (e) => this.setState({ author: e.target.value }) } />
                        <input 
                            type="text" 
                            value={ this.state.genre || ""}
                            onChange={ (e) => this.setState({ genre: e.target.value })} />
                        <input 
                            type="text" 
                            value={ this.state.recommended || ""}
                            onChange={ (e) => this.setState({ recommended: e.target.value || "" })} />
                        <button onClick={ () => this.editBook() }>Save</button>
                    </div>
                </div> 
            </div>
        )
    }
}

export default EditButton;

//axios call here? Edit would call the BOOK, edit, return RES and send WHOLE response up the chain. 