const startReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_REDUCER':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default startReducer;
