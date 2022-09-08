const interactionDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INTERACTION_DETAILS_REDUCER':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default interactionDetailsReducer;
