import React, { Component } from 'react';
import Recipe from '../containers/Recipe';
import Errors from '../containers/Errors';
import NoResult from '../containers/NoResult';

class RecipesList extends Component {
        
    state = { 
        recipes: [],
        isLoading: true,
        errors: ''
    }

    async componentDidMount() {
        try {
            const { ingredients } = this.props.match.params;        
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const url = `http://www.recipepuppy.com/api/?i=${ingredients}`
            let response = await fetch(proxyUrl + url, {
                method: 'get',
                headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
            })
            response = await response.json();
        this.setState({
            recipes: response.results,
            isLoading: false
        })
        } catch (e) {
            const errors = e.toString();
            this.setState({
                errors,
                isLoading: false
            })
        }

}

handleButtonClick = () => {
    this.props.history.push(`/`);           
}

render() {
    return (
        <div>
         <button onClick={this.handleButtonClick} className='newSearch-btn'>New search</button>
         <div className='container-recipes'>
         <div className='images-list'>
          {(this.state.isLoading !== true && this.state.recipes.length !== 0) ? this.state.recipes.map(el => 
            <Recipe key={el.title} 
            img={el.thumbnail} 
            title={el.title} 
            ingredients={el.ingredients} 
            href={el.href} />
            ) : <NoResult handleButtonClick={this.handleButtonClick} />}
         </div>
         </div>
            {this.state.errors.length !== 0 ? <Errors errors={this.state.errors} /> : null}
        </div>
    )
}
}

export default RecipesList;