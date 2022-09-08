import { combineReducers } from "redux";

const allUserReport = (state = [], action) => {
  if (action.type === "USER_REPORTS") {
    return action.payload;
  } else {
    return state;
  }
};
export default allUserReport;
