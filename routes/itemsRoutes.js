import { getItems, addNewItem, deleteItem } from '../controllers/itemsControllers';

// Add our controller functions to the route for our API
const routes = (app) => {
  app.route('/api/items')
    .get(getItems)
    .post(addNewItem);

  app.route('/api/item/:ItemId')
    .delete(deleteItem);
};

export default routes;
