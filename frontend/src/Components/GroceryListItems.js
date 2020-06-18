import React from 'react';
import axios from 'axios';
import {
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@material-ui/core';
import { RemoveShoppingCart } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const StyledListItemText = withStyles({
  primary: {
        color: 'black',
        fontFamily: 'Shadows Into Light',
        fontSize: '2rem'
  }
})(ListItemText);

const GroceryListItems = (props) => {

  function onTap(event) {
    var content = event.target.innerHTML;
    if (content === 'radio_button_unchecked'){
      event.target.innerHTML = "radio_button_checked";
    } else {
      event.target.innerHTML = "radio_button_unchecked";
    };
  };

  return(
    <div>
      <ButtonGroup variant="text" color="primary">
        <Button onClick={() => props.filterItems(props.items, "all")}>Show All</Button>
        <Button onClick={() => props.filterItems(props.items, "food")}>Food</Button>
        <Button onClick={() => props.filterItems(props.items, "dry")}>Dry Goods</Button>
      </ButtonGroup>
      <List>
      {props.items.map((item) => (
        <ListItem className="collection-item avatar" key={item._id}>
          <a id="radioButton" onClick={event => onTap(event)}>
            <i className="small material-icons">radio_button_unchecked</i>
          </a>
          <StyledListItemText primary={item.itemName} />
          <ListItemSecondaryAction>
            <IconButton onClick={props.handleDelete.bind(null, item)}>
              <RemoveShoppingCart fontSize="medium"/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GroceryListItems;
