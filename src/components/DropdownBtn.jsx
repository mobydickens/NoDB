//CHILD of AddBook
import React from 'react';

function DropdownBtn(props) {
    return (
        <div class="input-group mb-3">
            <select 
            class="custom-select" 
            id="inputGroupSelect03" 
            aria-label="Example select with button addon"
            onChange={ (e) => props.genrePickerFn(e.target.value) }
            value={ props.value }>
                <option selected>Choose genre...</option>
                <option value="Adventure">Adventure</option>
                <option value="Fiction">Fiction</option>
                <option value="History">History</option>
            </select>     
        </div>
    )
} 

export default DropdownBtn;