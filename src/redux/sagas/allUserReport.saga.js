import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAllUserReport(action) {
  try {
    const response = yield axios.get(`api/all/${action.payload}`);
    yield put({ type: "USER_REPORTS", payload: response.data });
  } catch {
    console.log("err cannot get All Reports");
  }
}

function* allUserReportSaga() {
  yield takeLatest("ALL_USER_REPORTS", getAllUserReport);
}

export default allUserReportSaga;
