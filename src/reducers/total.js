const total = (state = 0, action) => {
  switch (action.type) {
    case 'CALCULATE_TOTAL': {
      return parseInt(state) + parseInt(action.payload.price);
    }
    default:
      return state;
  }
};
export default total;
