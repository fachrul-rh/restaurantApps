import Detail from '../views/pages/detail';
import List from '../views/pages/list';
import Favorite from '../views/pages/like';

const routes = {
  '/': List,
  '/list': List,
  '/detail/:id': Detail,
  '/like': Favorite,
};

export default routes;
