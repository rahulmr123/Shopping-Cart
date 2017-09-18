import React, {Component} from 'react';
import Item from './cartItem';
import {connect} from 'react-redux';
import {Navbar} from 'react-materialize';
import axios from 'axios'
import {displaycartproducts} from '../actions'
class Cart extends Component {

componentWillMount(){
  this.props.dispatch1
}


  render() {
    return (
      <div>
        <Navbar>Cart</Navbar>
        {this.props.products.map(val => (
          <Item pro={val} quantity={val.quantity} />
        ))}
      </div>
    );
  }
}
const mapDispatchToProps =(dispatch,ownProps)=>{
  return{
    dispatch1:()=>{
      const url = "http://localhost:8080/add_to_cart";
      axios.get(url).then((response)=>{
        console.log("==>",response)
        dispatch(displaycartproducts(response.data.result));
      })
        
    }
  }
}
const mapStateToProps = (state, Props) => {
  return {
    products: state.Add,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
