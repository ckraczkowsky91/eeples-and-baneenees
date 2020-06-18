import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  SwipeableDrawer,
  TextField,
  Typography
} from '@material-ui/core';
import { Add, AddShoppingCart } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const StyledHeader = withStyles({
  h1: {
    color: '#ff6b6b',
    flexGrow: 1,
    fontFamily: 'Crete Round',
    fontSize: '3rem',
    paddingTop: '15px',
    paddingBottom: '10px'
  }
})(Typography);

const StyledButton = withStyles({
  root: {
    margin: '8px 0'
  }
})(Button);

const GroceryForm = (props) => {
  const [state, setState] = React.useState({
    bottom: false
  });
  const [item, setItem] = useState('');
  const [type, setType] = useState('');
// Define a function to handle submission of the form
  function handleSubmit(event) {
// Prevents the submission of the form from reloading the page
    event.preventDefault();
// The form should add an item using the POST endpoint of the API
// The items posted will need to follow the model defines in itemsModel.js
  /* UNCOMMENT when deploying locally */
    // const url = "http://localhost:4000/api/items";
  /* UNCOMMENT when pushing to Heroku */
    const url = "/api/items";
    axios.post(url, {
      itemName: item,
      itemType: type
    })
    .then((response) => {
      console.log(response);
      props.updateState('submit');
      document.getElementById('add-item-form').reset();
    })
    .catch((error) => {
      console.log('submitError: ' + error);
    });
  };

  const toggleDrawer = (direction, open) => {
    setState({ ...state, [direction]: open });
  };

    return(
      <div>
        <Button onClick={() => toggleDrawer('bottom', true)}>
          <AddShoppingCart fontSize="large"/>
        </Button>
        <SwipeableDrawer anchor='bottom'
          open = {state['bottom']}
          onClose={() => toggleDrawer('bottom', false)}
          onOpen={() => toggleDrawer('bottom', true)}>
          <Container>
          <form onSubmit={handleSubmit}>
            <StyledHeader variant="h1">Shopping Cart</StyledHeader>
            <div>
              <TextField fullWidth required label="Item" margin="normal" variant="outlined" onChange={(event) => {setItem(event.target.value)}}/>
            </div>
            <div>
              <TextField fullWidth required select label="Type" margin="normal" variant="outlined" onChange={(event) => {setType(event.target.value)}}>
                <MenuItem value="food">Food</MenuItem>
                <MenuItem value="dry good">Dry Good</MenuItem>
              </TextField>
            </div>
            <StyledButton
               variant="contained"
               color="primary"
               size="large"
               startIcon={<Add/>}
               type="submit"
             >
               Add
             </StyledButton>
          </form>
          </Container>
        </SwipeableDrawer>
      </div>
    );
};

export default GroceryForm;
