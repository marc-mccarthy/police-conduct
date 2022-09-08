import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_ALL_REPORTS" actions
function* fetchAllReports(action) {
  try {
    // get all reports from server
    const reports = yield axios.get('/api/admin/fetchAllReports');
    // send all reports to redux store
    yield put({ type: 'SET_ALL_REPORTS', payload: reports.data });
  } catch (error) {
    console.log('Error with adminReportSaga:', error);
  }
}

function* adminReportSaga() {
	yield takeLatest('ADMIN_ALL_REPORTS', fetchAllReports);
}

export default adminReportSaga;