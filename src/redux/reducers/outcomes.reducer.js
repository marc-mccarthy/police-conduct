const outcomesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'OUTCOMES_REDUCER':
      console.log(action.payload);
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default outcomesReducer;
