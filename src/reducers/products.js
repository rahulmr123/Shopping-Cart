// export default function() {
//   return [
//     {
//       productName: 'moto g4 plus',
//       price: '14000',
//       quantity: '10',
//     },
//     {
//       productName: 'mi',
//       price: '9999',
//       quantity: '7',
//     },
//     {
//       productName: 'asus',
//       price: '13000',
//       quantity: '19',
//     },
//   ];
// }

function getItem() {
  return [
    {
      productName: 'moto g4 plus',
      price: '14000',
      quantity: '10',
      id: '1',
    },
    {
      productName: 'mi',
      price: '9999',
      quantity: '7',
      id: '2',
    },
    {
      productName: 'asus',
      price: '13000',
      quantity: '19',
      id: '3',
    },
  ];
}

const productArray = (state = getItem(), action) => {
  switch (action.type) {
    case 'PRODUCT_LOAD': {
      //console.log(state)
      return state;
    }
    case 'DECREASE_QUANTITY': {
     var newState = [...state]
     for(var i=0;i<newState.length;i++){
       if(action.quantity.id==newState[i].id){
         newState[i].quantity--;
       }
     }
     return newState
    }
    case 'FILTER':{
      // var newState = [...state]
      // var returnState=[];
      // var input1 = action.payload.from
      // var input2 = action.payload.to
      // for(var i=0;i<newState.length;i++){
      //   if(newState[i].price>input1 && newState[i].price>=input2){
      //     returnState.concat(newState[i])
      //   }
      // }
      //   return returnState;
    }
    default: {
      return state;
    }
  }
};
export default productArray;
