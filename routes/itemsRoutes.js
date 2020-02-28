import { getItems, addNewItem } from '../controllers/itemsControllers';

const routes = (app) => {
  app.route('/api/items')
    .get(getItems)
    .post(addNewItem);
};

export default routes;
