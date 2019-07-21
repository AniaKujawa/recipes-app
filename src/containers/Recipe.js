import React from 'react';
import '../styles/RecipesList.scss'

const Recipe = (props) => {
    return (
        <div>
        <div className='images-list__imgholder'>
            <img src={props.img} alt='Thumbnail' className='images-list__img'></img>
        </div>
        <div className='images-list__textholder'>
            {props.title}
        </div>
            <div className='images-list__ingredients'>Ingredients: {props.ingredients}</div>
        <a className='images-list__fullRecipe' href={props.href} target='_blank' rel='noopener noreferrer'>Full recipe</a>
   </div>
    )
}

export default Recipe;