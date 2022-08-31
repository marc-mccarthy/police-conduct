import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editSaga() {
	yield takeLatest('EDIT_REPORT_SAGA', review);
}

// worker Saga: will be fired on "REVIEW_SAGA" actions
function* review(action) {
  try {
    // check incoming action for report data
    console.log(action.payload);
    // get all updated public reports from server
    const response = yield axios.post('/api/edit', action.payload);
    console.log(response);
    yield put({type: 'RESET_FORM'});
    yield put({type: "EACH_USER_REPORT", payload: action.payload.id});
  } catch (error) {
    console.log('Error with editSaga:', error);
  }
}

export default editSaga;
