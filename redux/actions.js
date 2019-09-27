import {
    UPDATE_QUERY,
    UPDATE_LOCATION_QUERY,
    UPDATE_CURRENT_LOCATION,
    FETCH_RESTAURANTS_REQUEST,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE,
    LOAD_MORE_REQUEST,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_FAILURE,
    CLEAR_LOCATION_RESULTS,
    LOCATION_SEARCH_REQUEST,
    LOCATION_SEARCH_SUCCESS,
    LOCATION_SEARCH_FAILURE,
    UPDATE_ENTITY_TYPE,
} from './constants';

export const updateQuery = currentQuery => ({
    type: UPDATE_QUERY,
    payload: currentQuery,
});

export const updateCurrentLocation = newLocation => ({
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
    type: CLEAR_LOCATION_RESULTS
})

export const fetchLocationsRequest = q => ({
    type: LOCATION_SEARCH_REQUEST,
    payload: q,
});

export const updateEntityType = t => ({
    type: UPDATE_ENTITY_TYPE,
    payload: t
});