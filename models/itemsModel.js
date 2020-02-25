import mongoose from 'mongoose';

const schema = mongoose.Schema;

// create and export the model for grocery items using the Schema constructor
export const groceryItems = new schema ({
  itemName: {
    type: String,
    required: true
  },
  itemQuantity: {
    type: String
  }
});
