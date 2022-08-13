const startReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_REPORT':
      return action.payload;
    default:
      return state;
  }
};

export default startReducer;
