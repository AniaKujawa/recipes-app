import React from 'react';
import '../styles/RecipesList.scss';

const NoResult = (props) => {
    return (
        <section className='errors'>
            <div className='errorsContainer'>
            <h1 className='errorsContainer__title'>There is no such a recipe</h1>
               <div className='errorsContainer__context'>
                Try something else!
               </div> 
               <button onClick={props.handleButtonClick} className='newSearch-btn'>New search</button>
            </div>
        </section>
    )
}

export default NoResult;