import React from 'react';
import '../styles/TagList.scss';

 const Tag = (props) => {
    return (
        <div className='tag' onClick={() => props.onClick(props.name)}>
            #{props.name}
        </div>
    )
}

export default Tag;