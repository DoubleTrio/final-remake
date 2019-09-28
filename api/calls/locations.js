import headers from './header';
import { processLocations } from './transformations';

const fetchLocationsAsync = async (q) => {
  const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?&q=${q}`, {
    headers,
  });
  const results = await response.json();
  return results.location_suggestions.map(processLocations);
};

export default fetchLocationsAsync;
