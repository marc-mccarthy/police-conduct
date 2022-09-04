import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPublicReportsSaga() {
	yield takeLatest('FETCH_PUBLIC_REPORTS', fetchPublicReports);
}

// worker Saga: will be fired on "FETCH_PUBLIC_REPORTS" actions
function* fetchPublicReports(action) {
  try {
    // get all public reports from server
    const reports = yield axios.get('/api/reports/fetchPublicReports');
    // send all public reports to redux store
    yield put({ type: 'SET_REPORTS', payload: reports.data });
  } catch (error) {
    console.log('Error with fetchReportsSaga:', error);
  }
}

export default fetchPublicReportsSaga;
