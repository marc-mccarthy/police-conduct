import { combineReducers } from "redux";

const allUserReport = (state = [], action) => {
  if (action.type === "ALL_REPORTS") {
    return action.payload;
  } else {
    return state;
  }
};
export default allUserReport;
