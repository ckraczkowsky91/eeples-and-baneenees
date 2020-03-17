import React, { Component } from 'react';
import axios from 'axios';
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';

class App extends Component{
// To render data from the API, we first need to add a constructor to hold that data
  constructor(props) {
// Initialize the constructor with properties to be used in the class
    super(props);
// We will use state to pass the data from App to ItemList
    this.state = {
      items: []
    };
    // Create a handler to update the state of App and pass it as a prop
  };

  updateStateHandler = () => {
    // Use axios to make Promise based calls to API
  /* UNCOMMENT when pushing to Heroku */
    // const url = process.env.MONGODB_URI;
    // axios.get('/api/items')
  /* UNCOMMENT when deploying locally */
    axios.get('http://localhost:4000/api/items')
      .then((Response) => {
    // Populate the state with the data from Response
    // The Response object has many properties including a data property which is an array of the required data
    // We can just set the items array in App's state to the array returned by Response.data
        this.setState({ items: Response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  };

// Once App has been mounted to the virtual DOM, load the data from the API
  componentDidMount() {
    this.updateStateHandler();
  };

  render() {
    return(
      <div className="container-fluid">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Eeeples & Baneenees</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#shopping-cart"><i className="medium material-icons">shopping_cart</i></a></li>
              <li><a href="#add-item"><i className="medium material-icons">search</i></a></li>
            </ul>
          </div>
        </nav>
        <GroceryList items={this.state.items} updateState={this.updateStateHandler}/>
        <GroceryForm updateState={this.updateStateHandler}/>
      </div>
    );
  };
};

export default App;
