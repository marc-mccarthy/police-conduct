const reportID = (state = '', action) => {
  if (action.type === "SHOW_ID") {
    return action.payload;
  } else {
    return state;
  }
};
export default reportID;
