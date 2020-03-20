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
  /* UNCOMMENT when deploying locally */
    // const url = `http://localhost:4000/api/item/${item._id}`;
  /* UNCOMMENT when pushing to Heroku */
    const url = `/api/item/${item._id}`;
    axios.delete(url)
      .then((response) => {
        console.log('Response: ' + response)
        props.updateState();
      })
      .catch((error) => {
        console.log('Error: ' + error)
      });
  };

  function handleMouseOver() {
    console.log('On the button')
  }

  return(
    <div>
      <h1>Grocery List</h1>
      <ul className="collection">
      {props.items.map((item) => (
        <li className="collection-item avatar" key={item._id}>
          <a id="radioButton" onClick={event => onTap(event)}>
            <i className="small material-icons">radio_button_unchecked</i>
          </a>
          <span className="title">{item.itemName}</span>
          <a className="secondary-content" onClick={handleDelete.bind(this, item)}>
            <i id="removeCart" className="small material-icons">remove_shopping_cart</i>
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
