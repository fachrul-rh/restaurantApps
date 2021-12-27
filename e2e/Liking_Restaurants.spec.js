Feature('Liking Restaurants');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#no-like-resto');
  I.see('No Restaurant Found..', '#no-like-resto');
});

Scenario('liking one restaurant', async ({ I }) => {
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
});

Scenario('Unliking one Restaurant', async ({ I }) => {
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
  const unlikeRestaurantDetail = locate('.resto-title a').first();
  const unlikeRestaurantHref = await I.grabTextFrom(unlikeRestaurantDetail);
  I.click(unlikeRestaurantHref);
  I.click('[aria-label="unlike this resto"]');
  I.amOnPage('/#/like');
  I.see('No Restaurant Found..', '#no-like-resto');
});
