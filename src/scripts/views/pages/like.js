import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { restaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <article class="post">
            <h2 tabindex="0" id="title-main">Your Like Resto</h2>
            <div class="warning" id="no-like-resto">
              <h3>No Restaurant Found...</h3>
            </div>
            <div id="resto_list" class="card"></div>
        </article>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const notFountElement = document.querySelector('#no-like-resto');
    const restaurantContainer = document.querySelector('#resto_list');

    if (restaurant !== false) {
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += restaurantListTemplate(resto);
        notFountElement.innerHTML = '';
      });
    }

    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('title-main').focus();
    });
  },
};

export default Like;
