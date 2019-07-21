import React from 'react';
import TagList from './TagList';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import RecipesList from './RecipesList';
import Footer from '../containers/Footer';
import Menu from '../containers/Menu';

const Routes = (
  <Switch className='App'>
      <Route exact path='/' component={TagList} />
      <Route path='/recipe/:ingredients' component={RecipesList} />    
  </Switch>
);

const App = () => {
  return (<div>
    <Router>
    <Menu />
    {Routes}
    </Router>
    <Footer />
      </div>
  );
};


export default App;
