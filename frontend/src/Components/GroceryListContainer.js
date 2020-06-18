import React from 'react';
import axios from 'axios';
import { Button, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import GroceryListItems from './GroceryListItems';
import GroceryForm from './GroceryForm';

const StyledHeader = withStyles({
  h1: {
    color: '#4ecdc4',
    flexGrow: 1,
    fontFamily: 'Crete Round',
    fontSize: '3rem',
    paddingTop: '15px',
    paddingBottom: '10px'
  }
})(Typography);

class GroceryListContainer extends React.Component{
    constructor() {
      super();
      this.state = {
        items: [],
        allItems: []
      };
    };

    updateStateHandler = () => {
      // Use axios to make Promise based calls to API
    /* UNCOMMENT when pushing to Heroku */
      axios.get('/api/items')
    /* UNCOMMENT when deploying locally */
      // axios.get('http://localhost:4000/api/items')
        .then((Response) => {
          this.setState({ items: Response.data });
          this.setState({ allItems: Response.data });
        })
        .catch((error) => {
          console.log(error);
        })
    };

    componentDidMount() {
        this.updateStateHandler();
    };

    handleDelete = (item) => {
    /* UNCOMMENT when deploying locally */
      // const url = `http://localhost:4000/api/item/${item._id}`;
    /* UNCOMMENT when pushing to Heroku */
      const url = `/api/item/${item._id}`;
      axios.delete(url)
        .then((response) => {
          console.log('Response: ' + response)
          this.updateStateHandler();
        })
        .catch((error) => {
          console.log('Error: ' + error)
        });
    };

    filterItems = (prevState, selectedFilter) => {
      let filteredItems = '';
      if(selectedFilter === "food"){
        filteredItems = this.state.allItems.filter(item => item.itemType.toLowerCase() === "food");
        this.setState({
          items: filteredItems
        })
      } else if(selectedFilter === "dry") {
        filteredItems = this.state.allItems.filter(item => item.itemType.toLowerCase() === "dry good");
        this.setState({
          items: filteredItems
        });
      } else {
        this.setState({
          items: this.state.allItems
        });
      };
    };

  render(){
    return(
      <div>
        <Toolbar>
          <StyledHeader variant="h1">Grocery List</StyledHeader>
          <GroceryForm updateState={this.updateStateHandler}/>
        </Toolbar>
        <GroceryListItems items={this.state.items} filterItems={this.filterItems} handleDelete={this.handleDelete} />
      </div>
    );
  };
};

export default GroceryListContainer;
