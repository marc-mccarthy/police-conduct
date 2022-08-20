import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getEachReport(action) {
  console.log("in getEach", action.payload);
  try {
    const response = yield axios.get(`api/each/${action.payload}`);
    console.log("getGear:", response.data);
    yield put({ type: "EACH_REPORT", payload: response.data });
  } catch {
    console.log("err cannot get each Report");
  }
}

function* eachReportSaga() {
  yield takeLatest("EACH_USER_REPORT", getEachReport);
}

export default eachReportSaga;
