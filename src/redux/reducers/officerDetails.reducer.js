const officerDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'OFFICER_DETAILS_REDUCER':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default officerDetailsReducer;
