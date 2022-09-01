import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import startSaga from './start.saga';
import officerDetailsSaga from './officerDetails.saga';
import interactionDetailsSaga from './interactionDetails.saga';
import interactionSummarySaga from './interactionSummary.saga';
import outcomesSaga from './outcomes.saga';
import reviewSaga from './review.saga';
import fetchReportsSaga from './fetchReports.saga';
import eachReportSaga from './eachReport.saga';
import deleteReportSaga from './deleteReport.saga';
import editSaga from './edit.saga';
import allUserReportSaga from './allUserReport.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    startSaga(),
    officerDetailsSaga(),
    interactionDetailsSaga(),
    interactionSummarySaga(),
    outcomesSaga(),
    reviewSaga(),
    fetchReportsSaga(),
    eachReportSaga(),
    deleteReportSaga(),
    editSaga(),
    allUserReportSaga(),
  ]);
}
