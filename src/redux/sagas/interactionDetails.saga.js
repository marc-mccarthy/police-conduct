import { put, takeLatest } from 'redux-saga/effects';

function* interactionDetailsSaga() {
	yield takeLatest('INTERACTION_DETAILS_SAGA', interactionDetails);
}

// worker Saga: will be fired on "INTERACTION_DETAILS_SAGA" actions
function* interactionDetails(action) {
  try {
    // check incoming action for report data
    console.log(action.payload);
    // get all updated public reports from server
    yield put({ type: 'INTERACTION_DETAILS_REDUCER', payload: action.payload });
  } catch (error) {
    console.log('Error with interactionDetailsSaga:', error);
  }
}

export default interactionDetailsSaga;
