import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* deleteReport(action) {
  try {
    const response = yield axios.delete(`api/delete/${action.payload}`);
  } catch {
    console.log("err cannot delete report");
  }
}

function* deleteReportSaga() {
  yield takeLatest("DELETE_REPORT", deleteReport);
}

export default deleteReportSaga;
