const addItem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      var newState = [...state];
      var a = false;
      for (var i = 0; i < newState.length; i++) {
        if (newState[i].id === action.payload.productID) {
          newState[i].quantity++;
          //console.log(newState[i].quantity);
          a = true;
          break;
        }
      }
      if (!a) {
        newState = newState.concat({
          id: action.payload.productID,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        });
      }
      return newState;
    }
    case 'CHECKOUT': {
      //console.log('hello');

      var newState = [];

      return newState;
    }
    default: {
      return state;
    }
  }
};
export default addItem;
