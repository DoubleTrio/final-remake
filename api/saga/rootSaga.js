
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';

import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
  LOCATION_SEARCH_REQUEST,
  LOCATION_SEARCH_SUCCESS,
  LOCATION_SEARCH_FAILURE,
} from '../../redux/constants';

import fetchRestuarantsAsync from '../calls/restaurants';
import fetchLocationsAsync from '../calls/locations';

function* fetchRestaurantDataSaga(action) {
  try {
    const data = yield call(fetchRestuarantsAsync, action.payload.location, action.payload.entityType);
    if (typeof data === 'string') {
      yield put({ type: FETCH_RESTAURANTS_FAILURE, payload: data });
      return false;
    }
    yield put({ type: FETCH_RESTAURANTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_RESTAURANTS_FAILURE, payload: 'Error while fetching data' });
    console.log(error);
  }
}

function* fetchLocationDataSaga(action) {
  try {
    const data = yield call(fetchLocationsAsync, action.payload);
    yield put({ type: LOCATION_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LOCATION_SEARCH_FAILURE, payload: 'Error while fetching locations' });
    console.log(error);
  }
}

// Watcher Functions
function* watchRestaurantData() {
  yield takeLatest(FETCH_RESTAURANTS_REQUEST, fetchRestaurantDataSaga);
}

function* watchLocationData() {
  yield takeLatest(LOCATION_SEARCH_REQUEST, fetchLocationDataSaga);
}

export default function* rootSaga() {
  yield all([
    watchRestaurantData(),
    watchLocationData(),
  ]);
}
