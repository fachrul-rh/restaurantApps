/* eslint-disable no-shadow */
import RestaurantDbSource from '../../data/restaurantdb-source';
import { restaurantListTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `<article class="post">
              <h2 tabindex="0" id="title-main">Restaurant List</h2>
              <div id="resto_list" class="card"></div>
            </article>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#resto_list');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += restaurantListTemplate(restaurant);
    });
  },
};

export default List;
