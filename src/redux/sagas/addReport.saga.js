import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addReportSaga() {
	yield takeLatest('START_REPORT', addReport);
}

// worker Saga: will be fired on "START_REPORT" actions
function* addReport(action) {
  try {
    // check incoming action for report data
    console.log(action.payload);
    // send new report data to server
    yield axios.post('/api/reports/addReport', action.payload);
    // get all updated public reports from server
    yield ({ type: 'FETCH_ALL_REPORTS' });
  } catch (error) {
    console.log('Error with startReportSaga:', error);
  }
}

export default addReportSaga;
