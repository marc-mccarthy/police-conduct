import { put, takeLatest } from 'redux-saga/effects';

function* startSaga() {
	yield takeLatest('START_SAGA', start);
}

// worker Saga: will be fired on "START_SAGA" actions
function* start(action) {
  try {
    // check incoming action for report data
    // get all updated public reports from server
    yield put({ type: 'START_REDUCER', payload: action.payload });
  } catch (error) {
    console.log('Error with startSaga:', error);
  }
}

export default startSaga;
