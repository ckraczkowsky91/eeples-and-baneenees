import React from 'react';

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

  return(
    <div>
      <ul className="collection">
      {props.items.map((item) => (
        <li className="collection-item avatar" key={item._id}>
          <i className="material-icons">shopping_basket</i>
          <span className="title" style={{paddingLeft: '20px'}}>{item.itemName}</span>
          <a id="radioButton" onClick={event => onTap(event)}><i className="small material-icons secondary-content">radio_button_unchecked</i></a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
