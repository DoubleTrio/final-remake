import { combineReducers } from 'redux';
import {
  UPDATE_QUERY,
  UPDATE_LOCATION_QUERY,
  UPDATE_CURRENT_LOCATION,
  CLEAR_LOCATION_RESULTS,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
  LOAD_MORE_REQUEST,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_FAILURE,
  LOCATION_SEARCH_REQUEST,
  LOCATION_SEARCH_SUCCESS,
  LOCATION_SEARCH_FAILURE,
  UPDATE_ENTITY_TYPE
} from './constants';

const queryReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return (action.payload);
    default:
      return state;
  }
};

entityTypeReducer = (state = 'city', action) => {
  switch (action.type) {
    case UPDATE_ENTITY_TYPE:
      return(action.payload)
    default:
      return state
  }
}

const updateLocationReducer = (state = {name: 'None', id: -1}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_LOCATION:
      return(action.payload)
    default:
      return state
  }
};

const restaurantDataReducer = (state = {data: {}, success: null, error: null, waiting: null, loadedMore: null}, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
      return {
        data: {}, 
        success: null, 
        error: null, 
        waiting: true, 
        loadedMore: null
      }
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        data: action.payload, 
        success: true, 
        error: null, 
        waiting: false, 
        loadedMore: null
      }
    case FETCH_RESTAURANTS_FAILURE:
      return {
        data: {}, 
        success: false, 
        error: action.payload, 
        waiting: false, 
        loadedMore: null
      }
    default:
      return state
  }
}

const locationDataReducer = (state = {data: [], success: null, error: null, waiting: null}, action) => {
  switch (action.type) {
    case LOCATION_SEARCH_REQUEST: 
      return {
        data: [], 
        success: null,
        error: null, 
        waiting: true
      }
    case LOCATION_SEARCH_SUCCESS:
      return {
        data: action.payload, 
        success: true, 
        error: null, 
        waiting: false
      }
    case LOCATION_SEARCH_FAILURE:
      return {
        data: [], 
        success: false, 
        error: action.payload, 
        waiting: false
      }
    case CLEAR_LOCATION_RESULTS:
      return {
        data: [], 
        success: null, 
        error: null, 
        waiting: null
      }  
    default: 
      return state
  }
}

const reducer = combineReducers({
  query: queryReducer,
  restaurantData: restaurantDataReducer,
  locationData: locationDataReducer,
  currentLocation: updateLocationReducer,
  entityType: entityTypeReducer,
});

export default reducer;
