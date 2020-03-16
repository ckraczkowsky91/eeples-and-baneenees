import React, { Component } from 'react';
import axios from 'axios';

class GroceryForm extends Component {
// Define a function to handle submission of the form
  handleSubmit() {
// The form should add an item using the POST endpoint of the API
// The items posted will need to follow the model defines in itemsModel.js
    axios.post("http://localhost:4000/api/items", {
      itemName: this.refs.name.value,
      itemQuantity: this.refs.quantity.value
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  };

// Define what should be rendered by the component
  render(){
    return(
      <div id="add-item">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h2>What should be added to the grocery list?</h2>
          <div>
            <input ref="name" />
            <label>Item</label>
          </div>
          <div>
            <input ref="quantity" />
            <label>Quantity</label>
          </div>
          <button className="btn" type="submit">Add</button>
        </form>
      </div>
    );
  };
};

export default GroceryForm;
