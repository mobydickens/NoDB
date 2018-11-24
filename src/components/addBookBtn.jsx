import React from 'react';

function AddBookBtn(props) {
    return(
        <div>
            <button 
                type="button" 
                className="btn btn-secondary main-button"
                onClick={ () => props.handleChange() }>
                Click to add your own book to favorites!
            </button>
        </div>
    )
}

export default AddBookBtn;