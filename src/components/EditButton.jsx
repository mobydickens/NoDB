//child of FAVORITES
import React, { Component } from 'react';
import DropdownBtn from './DropdownBtn.jsx';

function EditButton() {
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
                    <input type="text" value={} />
                    <input type="text" value={} />
                    <DropdownBtn value={} />
                    <input type="text"/>
                </div>
            </div> 
        </div>
    )
}

export default EditButton;