import { apiKey } from '../../config.json';

const fetchLocationsAsync = async (q) => {
  console.log('fetchlocation called!')
  const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?&q=${q}`, {
    headers: {
      'user-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const results = await response.json();
  return results.location_suggestions.map(processLocations);
};

const processLocations = ({ country_flag_url, country_name, id, name }) => ({
  id,
  countryFlag: country_flag_url,
  countryName: country_name,
  name,
});

export default fetchLocationsAsync;