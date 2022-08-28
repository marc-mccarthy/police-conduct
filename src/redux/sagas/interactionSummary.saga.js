import { put, takeLatest } from 'redux-saga/effects';

function* interactionSummarySaga() {
	yield takeLatest('INTERACTION_SUMMARY_SAGA', interactionSummary);
}

// worker Saga: will be fired on "INTERACTION_SUMMARY_SAGA" actions
function* interactionSummary(action) {
  try {
    // check incoming action for report data
    console.log(action.payload);
    // get all updated public reports from server
    yield put({ type: 'INTERACTION_SUMMARY_REDUCER', payload: action.payload });
  } catch (error) {
    console.log('Error with interactionSummarySaga:', error);
  }
}

export default interactionSummarySaga;
