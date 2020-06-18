import React, { Component } from 'react';
import GroceryListContainer from './GroceryListContainer';
import {
  AppBar,
  Divider,
  Link,
  List,
  ListItem,
  Paper,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

const StyledLink = withStyles({
  root: {
    fontFamily: "Crete Round",
    width: '100%'
  }
})(Link);

const StyledPaper = withStyles({
  root: {
    margin: 'auto',
    marginTop: '1vh',
    marginBottom: '1.5vh',
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
    padding: "0.5ch",
    background: '#ff6b6b'
  },
})(AppBar);

const StyledSwipeableDrawer = withStyles({
  paper: {
    padding: '10px',
    width: '20%'
  }
})(SwipeableDrawer);

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    };
  };

  toggleDrawer(value){
    this.setState({
      menuOpen: value
    })
  };

  render(){
    return(
      <div style={{height: '100%'}}>
        <StyledAppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => this.toggleDrawer(true)}>
              <Menu />
            </IconButton>
            <StyledTitle variant="h4">Eeeples & Baneenees</StyledTitle>
          </Toolbar>
        </StyledAppBar>
        <StyledSwipeableDrawer
          open={this.state['menuOpen']}
          onClose={() => {this.toggleDrawer(false)}}
          onOpen={() => {this.toggleDrawer(true)}}>
          <Typography style={{color: '#ff6b6b'}} variant="h4">About Me</Typography>
          <Divider />
          <Typography style={{color: '#4ecdc4', fontWeight: 'bold'}}>Developer</Typography>
          <Typography style={{marginLeft: '8px'}}>Colin Kraczkowsky</Typography>
          <Typography style={{color: '#4ecdc4', fontWeight: 'bold'}}>Resources</Typography>
          <List>
            <ListItem button>
              <StyledLink href="https://github.com/ckraczkowsky91" target="_blank" rel="noreferrer">GitHub</StyledLink>
            </ListItem>
            <ListItem button>
              <StyledLink href="https://medium.com/@ckraczkowsky" target="_blank" rel="noreferrer">Medium</StyledLink>
            </ListItem>
            <ListItem button>
              <StyledLink href="https://www.linkedin.com/in/colinkraczkowsky/" target="_blank" rel="noreferrer">LinkedIn</StyledLink>
            </ListItem>
          </List>
        </StyledSwipeableDrawer>
        <StyledPaper>
          <GroceryListContainer />
        </StyledPaper>
      </div>
    );
  };
};

export default App;
