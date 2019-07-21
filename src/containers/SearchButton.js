import React from 'react';

const SearchButton = (props) => {
    return <button className='searchButton' onClick={props.onSubmit}>Search</button>
}

export default SearchButton;