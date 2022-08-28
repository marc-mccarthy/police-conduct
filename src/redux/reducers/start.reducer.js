const startReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_REDUCER':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default startReducer;
