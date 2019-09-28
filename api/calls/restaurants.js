import { transformRestaurantData } from './transformations';
import headers from './header';

const fetchRestuarantsAsync = async (location, entityType) => {
  const response = await fetch(`https://developers.zomato.com/api/v2.1/locations?query=${location}`, {
    headers,
  });

  const results = await response.json();
  const entityId = results.location_suggestions[0].entity_id;
  const fetchRestaurantResponse = await fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${entityId}&entity_type=${entityType}`, {
    headers,
  });

  const restaurantResults = await fetchRestaurantResponse.json();
  if (restaurantResults.code === 403) {
    return 'Location parameters invalid';
  }

  const bestRated = restaurantResults.best_rated_restaurant.map(transformRestaurantData);
  return bestRated;
};
export default fetchRestuarantsAsync;
