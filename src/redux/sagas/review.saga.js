import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* reviewSaga() {
	yield takeLatest('REVIEW_SAGA', review);
}

// worker Saga: will be fired on "REVIEW_SAGA" actions
function* review(action) {
  try {
    // check incoming action for report data
    // get all updated public reports from server
    const response = yield axios.post('/api/reports/addReport', action.payload);
    yield put({type: 'SHOW_ID', payload: response.data});
    yield put({type: 'RESET_FORM'});
  } catch (error) {
    console.log('Error with reviewSaga:', error);
  }
  yield put({type:'FETCH_ALL_REPORTS'})
}

export default reviewSaga;
