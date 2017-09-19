import axios from 'axios';
export const addtocart = item => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};
export const decreaseQuantity = quantity => {
  return {
    type: 'DECREASE_QUANTITY',
    quantity: quantity,
  };
};
export const load = () => {
  return {
    type: 'PRODUCT_LOAD',
  };
};
export const calculatetotal = item => {
  return {
    type: 'CALCULATE_TOTAL',
    payload: item,
  };
};
export const checkout = () => {
  return {
    type: 'CHECKOUT',
  };
};
export const filter = item => {
  return {
    type: 'FILTER',
    payload: item,
  };
};
export const fetchProducts = item => {
  //console.log("===>",item)

  return {
    type: 'FETCH',
    payload: item,
  };
};
export const displaycartproducts = item => {
  return {
    type: 'DISPLAY',
    payload: item,
  };
};
export const sent = item => {
  axios.post('http://localhost:8080/add_to_cart', item).then(response => {
    console.log(response);
  });
};
