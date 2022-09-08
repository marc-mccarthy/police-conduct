import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editSaga() {
	yield takeLatest('EDIT_REPORT_SAGA', review);
}

// worker Saga: will be fired on "REVIEW_SAGA" actions
function* review(action) {
  try {
    const response = yield axios.post('/api/edit', action.payload);
    yield put({type: 'RESET_FORM'});
    yield put({type: "EACH_USER_REPORT", payload: action.payload.id});
  } catch (error) {
    console.log('Error with editSaga:', error);
  }
}

export default editSaga;
