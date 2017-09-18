import axios from 'axios'
function getItem() {
  
    //console.log("===>",response)
  return [
    {
      productName: 'moto g4 plus',
      price: 14000,
      quantity: '10',
      id: '1',
    },
    {
      productName: 'mi',
      price: 9999,
      quantity: '7',
      id: '2',
    },
    {
      productName: 'asus',
      price: 13000,
      quantity: '19',
      id: '3',
    },
  ];
}

const productArray = (state = [], action) => {
  switch (action.type) {
    case 'DECREASE_QUANTITY': {
      var newState = [...state];
      for (var i = 0; i < newState.length; i++) {
        if (action.quantity.productID=== newState[i].productID) {
          newState[i].quantity--;
        }
      }
      return newState;
    }
    case 'FETCH':{
      var newState = [...state];
      newState = action.payload;
      return newState
    }

    default:
      return state;
  }
};
export default productArray;
