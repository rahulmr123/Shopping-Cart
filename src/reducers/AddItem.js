const addItem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      var newState = [...state];
      var a = false;
      for (var i = 0; i < newState.length; i++) {
        if (newState[i].id == action.payload.id) {
          newState[i].quantity++;
          console.log(newState[i].quantity);
          a = true;
          break;
        }
      }
      if (!a) {
        newState = newState.concat({
          id: action.payload.id,
          name: action.payload.productName,
          price: action.payload.price,
          quantity: 1,
        });
      }
      return newState;
    // case 'DECREASE_QUANTITY': {
    //   var newData = [];
    //   newData = action.quantity;
    //   var newQuantity = newData.quantity;
    //   newQuantity--;
    //   newData.quantity = newQuantity;
    //   return state.concat(newData);
    // }

    // case 'CALCULATE_TOTAL':{
    //   console.log(action.payload.price)

    // }
  case 'CHECKOUT':{
    console.log("hello")
    var newState = [...state];
    newState = [];
    return newState;

  }
    default: {
      return state;
    }
  }
};
export default addItem;
