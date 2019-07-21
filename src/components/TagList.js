import React, { Component} from 'react';
import Tag from '../containers/Tag';
import SearchBar from '../containers/SearchBar';
import SearchButton from '../containers/SearchButton';
import '../styles/TagList.scss';

class TagList extends Component {
    constructor() {
        super();
        this.state = {
            tagList: [],
            newTag: '',
        }
    }
    handleChange = event => {
        this.setState({ newTag: event.target.value });
      };
    
      handleAddClick = () => {
        const { newTag, tagList } = this.state;
        if (newTag !== '' & !tagList.includes(newTag)) {
            tagList.push(newTag);
            this.setState({
              newTag: '',
              tagList
            });
        }
    }

     handleSubmit = () => {
      const  {tagList} = this.state;
      if (tagList.length > 0) {
          const ingredients = tagList.join();
          this.props.history.push(`/recipe/${ingredients}`);
      }
    }
    
      removeTag = tag => {
        const {tagList}= this.state;
        for (let i = 0; i < tagList.length; i++) {
          if (tagList[i] === tag) {
            tagList.splice(i, 1);
          }
        }
        this.setState({ tagList });
      };

    
    render() {
        return (
          <section className='main'>
            <div className='searchArea'>
            <h1 className='searchArea__title'>
              Find your favourite recipe!
            </h1>
              <SearchBar onChange={this.handleChange}
                 onClick={this.handleAddClick}
                newTag={this.state.newTag}
                 />
              <div className='taglist' >
              {this.state.tagList.map((el, id) => 
                <Tag key={id} onClick={this.removeTag} name={el} />)}
              </div>          
                  <SearchButton onSubmit={this.handleSubmit}  />
              </div>
          </section>
        )
    }
}

export default TagList;