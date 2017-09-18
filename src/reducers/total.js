const total = (state = 0, action) => {
  switch (action.type) {
    case 'CALCULATE_TOTAL': {
      return (parseInt(state,10) + parseInt(action.payload.price,10));
    }
    default:
      return state;
  }
};
export default total;
