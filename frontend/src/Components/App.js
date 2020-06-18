import React, { Component } from 'react';
import axios from 'axios';
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';
import GroceryListContainer from './GroceryListContainer';
import GroceryListItems from './GroceryListItems';
import {
  AppBar,
  Box,
  Paper,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledPaper = withStyles({
  root: {
    margin: 'auto',
    width: '75%',
  },
})(Paper);

const StyledTitle = withStyles({
  h4: {
      flexGrow: 1,
      fontFamily: "Crete Round"
    },
})(Typography);

const StyledAppBar = withStyles({
  root: {
    flexGrow: 1,
    padding: "1.5ch",
    background: '#ff6b6b'
  },
})(AppBar);

class App extends Component{
  render(){
    return(
      <div style={{backgroundColor: "#fdfcdc"}}>
        <StyledAppBar position="sticky">
          <Toolbar>
            <StyledTitle variant="h4">Eeeples & Baneenees</StyledTitle>
          </Toolbar>
        </StyledAppBar>
        <StyledPaper>
          <GroceryListContainer />
        </StyledPaper>
      </div>
    );
  };
};

export default App;
