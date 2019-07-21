import React from 'react';
import AddButton from './AddButton';

export default function SearchBar( { onChange, onClick, newTag}) {
    return (
    <div>
        <input type="text"
         placeholder="Type or choose an ingredient" 
         list="ingredients" 
         onChange={onChange}
         value={newTag} 
         className="searchArea__searchBar"
         />
        <datalist id="ingredients">
        <option>onions</option>
        <option>garlic</option>
        <option>tomato</option>
        <option>chicken</option>
        </datalist>
        <AddButton onClick={onClick} />
    </div>
    )
}