import React, { Component } from 'react';
import axios from 'axios';
import GroceryList from './GroceryList';

class App extends Component{
// To render data from the API, we first need to add a constructor to hold that data
  constructor(props) {
// Initialize the constructor with properties to be used in the class
    super(props);
// We will use state to pass the data from App to ItemList
    this.state = {
      items: []
    };
  };

// Once App has been mounted to the virtual DOM, load the data from the API
  componentDidMount(){
    const url = 'http://localhost:4000/api/items';
// Use axios to make Promise based calls to API
    axios.get(url)
      .then((Response) => {
// Populate the state with the returned data
        this.setState({
// The Response object has many properties including a data property which is an array of the required data
// We can just set the items array in App's state to the array returned by Response.data
          items: Response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return(
      <div className="container-fluid">
          <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Grocery List</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
      <GroceryList items={this.state.items}/>
      </div>
    );
  };
};

export default App;
