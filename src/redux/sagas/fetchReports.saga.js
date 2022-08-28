import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchReportsSaga() {
	yield takeLatest('FETCH_ALL_REPORTS', fetchReports);
}

// worker Saga: will be fired on "FETCH_ALL_REPORTS" actions
function* fetchReports(action) {
  try {
    // get all public reports from server
    const reports = yield axios.get('/api/reports/fetchReports');
    // send all public reports to redux store
    yield put({ type: 'SET_REPORTS', payload: reports.data });
  } catch (error) {
    console.log('Error with fetchReportsSaga:', error);
  }
}

export default fetchReportsSaga;
