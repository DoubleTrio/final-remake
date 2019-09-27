import { apiKey } from '../../config.json';
import { transformRestaurantData } from './transformations';

const fetchRestuarantsAsync = async (location, entityType) => {
  const response = await fetch(`https://developers.zomato.com/api/v2.1/locations?query=${location}`, {
    headers: {
      'user-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const results = await response.json();
  const entityId = results.location_suggestions[0].entity_id
  console.log(entityId, 'aaaaaaaa')
  // return results.best_rated_restaurant.map(transformRestaurantData)

  const fetchRestaurantResponse = await fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${entityId}&entity_type=${entityType}`, {
    headers: {
      'user-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const restaurantResults = await fetchRestaurantResponse.json();
  const bestRated = restaurantResults.best_rated_restaurant.map(transformRestaurantData)
  return bestRated
};
export default fetchRestuarantsAsync;
