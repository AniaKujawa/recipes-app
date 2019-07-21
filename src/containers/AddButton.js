import React from 'react';
import '../styles/TagList.scss'

const AddButton = (props) => {
    return <button className='addButton' onClick={props.onClick}>+</button>
}

export default AddButton;