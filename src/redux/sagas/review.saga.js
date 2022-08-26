import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* reviewSaga() {
	yield takeLatest('REVIEW_SAGA', review);
}

// worker Saga: will be fired on "REVIEW_SAGA" actions
function* review(action) {
  try {
    // check incoming action for report data
    console.log(action.payload);
    // get all updated public reports from server
    yield axios.post('/api/reports/addReport', action.payload)
  } catch (error) {
    console.log('Error with reviewSaga:', error);
  }
  yield put({type:'FETCH_ALL_REPORTS'})
}

export default reviewSaga;
