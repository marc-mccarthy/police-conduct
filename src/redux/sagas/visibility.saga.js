import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REVIEW_SAGA" actions
function* privacy(action) {
  try {
    console.log(action.payload);
    const response = yield axios.post('/api/update', action.payload);
    console.log(response);
    yield put({type: "REPORT_VISIBILITY", payload: action.payload.id});
  } catch (error) {
    console.log('Error with visibilitySaga: ', error);
  }
}

function* visbilitySaga() {
	yield takeLatest('TOGGLE_REPORT', privacy);
}

export default visbilitySaga;