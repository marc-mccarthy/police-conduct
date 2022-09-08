import { put, takeLatest } from 'redux-saga/effects';

function* officerDetailsSaga() {
	yield takeLatest('OFFICER_DETAILS_SAGA', officerDetails);
}

// worker Saga: will be fired on "OFFICER_DETAILS_SAGA" actions
function* officerDetails(action) {
  try {
    // check incoming action for report data
    // get all updated public reports from server
    yield put({ type: 'OFFICER_DETAILS_REDUCER', payload: action.payload });
  } catch (error) {
    console.log('Error with officerDetailsSaga:', error);
  }
}

export default officerDetailsSaga;
