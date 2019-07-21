import React from 'react';
import '../styles/RecipesList.scss';

const Errors = (props) => {
    return (
        <section className='errors'>
            <div className='errorsContainer'>
            <h1 className='errorsContainer__title'>Sorry, we can't load recipes for you</h1>
               <div className='errorsContainer__context'>
               {props.errors}
                <div>Try again later!</div>
               </div> 
            </div>
        </section>
    )
}

export default Errors;