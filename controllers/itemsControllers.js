import mongoose from 'mongoose';
import { groceryItems } from '../models/itemsModel';

// compile a model usign Mongoose where the first argument is the singular name of the desired collection
const Item = mongoose.model('Item', groceryItems);

// create controller functions to interact with the data in our schema
// these functions will be passed to the routes to create the endpoints

// create a POST method controller function to create a new item
export const addNewItem = (req, res) => {
  let newItem = new Item(req.body);

  newItem.save((error, Item) => {
    if(error) {
      res.send(error)
    } else {
      res.json(Item)
    };
  });
};

// create a GET method controller function to retriece all items
export const getItems = (req, res) => {
  Item.find((error, Item) => {
    if(error) {
      res.send(error)
    } else {
      res.json(Item)
    };
  });
};
