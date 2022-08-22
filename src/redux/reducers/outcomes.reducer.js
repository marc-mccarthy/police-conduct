const outcomesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'OUTCOMES_REDUCER':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default outcomesReducer;
