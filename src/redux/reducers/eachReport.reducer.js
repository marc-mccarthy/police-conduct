import { combineReducers } from "redux";

const eachReport = (state = [], action) => {
  if (action.type === "EACH_REPORT") {
    return action.payload;
  } else {
    return state;
  }
};
export default eachReport;
