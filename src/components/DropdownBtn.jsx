//CHILD of AddBook
import React from 'react';

function DropdownBtn(props) {
    return (
        <div className="input-group mb-3">
            <select 
            className="custom-select" 
            id="inputGroupSelect03" 
            aria-label="Example select with button addon"
            onChange={ (e) => props.genrePickerFn(e.target.value) }
            value={ props.value }>
                <option defaultValue>Choose genre...</option>
                <option value="Adventure">Adventure</option>
                <option value="Autobiography">Autobiography</option>
                <option value="Biography">Biography</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Fiction">Fiction</option>
                <option value="History">History</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Horror">Horror</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Religion">Religion</option>
                <option value="Romance">Romance</option>
                <option value="Science">Science</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Self Improvement">Self Improvement</option>
                <option value="Other">Other</option>
            </select>     
        </div>
    )
} 

export default DropdownBtn;