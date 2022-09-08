import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getEachReport(action) {
  console.log("in getEach", action.payload);
  try {
    const response = yield axios.get(`api/each/${action.payload}`);
    console.log("specific report:", response.data);
    yield put({ type: "EACH_REPORT", payload: response.data });
  } catch {
    console.log("err cannot get each Report");
  }
}

function* privacyChange(action) {
      try {
        const response = yield axios.put(`api/each/privacy/${action.payload}`);
        getEachReport();
      } catch (error) {
        console.log('Error with PrivacyChange in eachReportSaga:', error);
      }
  }

function* eachReportSaga() {
  yield takeLatest("EACH_USER_REPORT", getEachReport);
  yield takeLatest('TOGGLE_PRIVACY', privacyChange);
}

export default eachReportSaga;
