import { combineReducers } from "redux";

const adminReport = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_REPORTS':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default adminReport;