import {
  UPDATE_QUERY,
  UPDATE_CURRENT_LOCATION,
  FETCH_RESTAURANTS_REQUEST,
  CLEAR_LOCATION_RESULTS,
  LOCATION_SEARCH_REQUEST,
  UPDATE_ENTITY_TYPE,
} from './constants';

export const updateQuery = (currentQuery) => ({
  type: UPDATE_QUERY,
  payload: currentQuery,
});

export const updateCurrentLocation = (newLocation) => ({
  type: UPDATE_CURRENT_LOCATION,
  payload: newLocation,
});

export const fetchRestaurantRequest = (location, entityType) => ({
  type: FETCH_RESTAURANTS_REQUEST,
  payload: {
    location,
    entityType,
  },
});

export const clearLocationResults = () => ({
  type: CLEAR_LOCATION_RESULTS,
});

export const fetchLocationsRequest = (q) => ({
  type: LOCATION_SEARCH_REQUEST,
  payload: q,
});

export const updateEntityType = (t) => ({
  type: UPDATE_ENTITY_TYPE,
  payload: t,
});
