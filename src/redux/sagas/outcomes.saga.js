import { put, takeLatest } from 'redux-saga/effects';

function* outcomesSaga() {
	yield takeLatest('OUTCOMES_SAGA', outcomes);
}

// worker Saga: will be fired on "OUTCOMES_SAGA" actions
function* outcomes(action) {
  try {
    // check incoming action for report data
    // get all updated public reports from server
    yield put({ type: 'OUTCOMES_REDUCER', payload: action.payload });
  } catch (error) {
    console.log('Error with outcomesSaga:', error);
  }
}

export default outcomesSaga;
