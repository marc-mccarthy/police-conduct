const reportsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_REPORTS':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reportsReducer;
