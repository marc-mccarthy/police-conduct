import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import startReducer from './start.reducer';
import officerDetailsReducer from './officerDetails.reducer';
import interactionDetailsReducer from './interactionDetails.reducer';
import interactionSummaryReducer from './interactionSummary.reducer';
import outcomesReducer from './outcomes.reducer';
import reports from './reports.reducer';
import eachReport from './eachReport.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  startReducer, // TYPE: START_SAGA
  officerDetailsReducer, // TYPE: OFFICER_DETAILS_SAGA
  interactionDetailsReducer, // TYPE: INTERACTION_DETAILS_SAGA
  interactionSummaryReducer, // TYPE: INTERACTION_SUMMARY_SAGA
  outcomesReducer, // TYPE: OUTCOMES_SAGA
  reports, // TYPE: SET_REPORTS
  eachReport, // TYPE: EACH_REPORT
});

export default rootReducer;
