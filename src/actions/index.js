export const addtocart = (item) => {
 // console.log(item)
  return {
    type: 'ADD_TO_CART',
    payload: item
  };
};
export const decreaseQuantity =(quantity)=>{
  //console.log(quantity)
  return{
    type:'DECREASE_QUANTITY',
    quantity: quantity

  }
}
export const load = ()=>{
  return{
    type:'PRODUCT_LOAD'
  }
}
export const calculatetotal =(item)=>{
  return{
    type: 'CALCULATE_TOTAL',
    payload:item

  }
}
export const checkout = ()=>{
  return{
    type: 'CHECKOUT'
  }
}
export const filter = (item)=>{
  console.log(item)
  return{
    type:'FILTER',
    payload:item
  }
}