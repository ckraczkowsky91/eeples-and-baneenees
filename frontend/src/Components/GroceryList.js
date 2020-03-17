import React from 'react';
import axios from 'axios';

// Make a Component holding the list of items from /api/items
// The Component will get the items from props (i.e. props.items) passed from App
// Since props.items is an Array, we can map over it to display all of the data

const GroceryList = (props) => {
  function onTap(event) {
    var content = event.target.innerHTML;
    if (content === 'radio_button_unchecked'){
      event.target.innerHTML = "radio_button_checked";
    } else {
      event.target.innerHTML = "radio_button_unchecked";
    };
  };

  function handleDelete(item) {
    // Use axios and the endpoint to delete an item
    // I'll need to pass the id of the item to axios
    const url = 'http://localhost:4000';
    axios.delete(url + `/api/item/${item._id}`)
      .then((response) => {
        console.log('Response: ' + response)
        props.updateState();
      })
      .catch((error) => {
        console.log('Error: ' + error)
      });
  };

  return(
    <div id="shopping-cart">
      <h2>Grocery List</h2>
      <ul className="collection">
        <li>item1</li>
        <li>item2</li>
      </ul>
    </div>
  );
};

export default GroceryList;
