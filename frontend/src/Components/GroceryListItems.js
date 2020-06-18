import React from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import { RemoveShoppingCart } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const StyledButton = withStyles({
  label: {
    color: '#878e88',
    fontFamily: 'Crete Round'
  }
})(Button);

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
    <Container>
      <ButtonGroup variant="text" color="primary">
        <StyledButton onClick={() => props.filterItems(props.items, "all")}>Show All</StyledButton>
        <StyledButton onClick={() => props.filterItems(props.items, "food")}>Food</StyledButton>
        <StyledButton onClick={() => props.filterItems(props.items, "dry")}>Dry Goods</StyledButton>
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
              <RemoveShoppingCart fontSize="small"/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GroceryListItems;
