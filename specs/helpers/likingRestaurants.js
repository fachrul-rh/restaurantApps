const likingRestaurant = () => {
  I.see('No Restaurant Found..', '#no-like-resto');
  I.amOnPage('/');
  I.seeElement('.resto-title a');
  const firstRestaurant = locate('.resto-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantDetailLink = locate('.resto-title a').first();
  const firstRestaurantHref = await I.grabTextFrom(firstRestaurantDetailLink);
  I.click(firstRestaurantHref);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('#resto_list');
  const likedRestaurantTitle = await I.grabTextFrom('.resto-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
};

export default likingRestaurant;
