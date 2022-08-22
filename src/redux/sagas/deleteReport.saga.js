import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* deleteReport(action) {
  console.log("in deleteReportSaga", action.payload);
  try {
    const response = yield axios.delete(`api/delete/${action.payload}`);
    console.log("deleteReport:", response.data);
  } catch {
    console.log("err cannot delete report");
  }
}

function* deleteReportSaga() {
  yield takeLatest("DELETE_REPORT", deleteReport);
}

export default deleteReportSaga;
