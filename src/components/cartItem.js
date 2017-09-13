import React, {Component} from 'react';

import {connect} from 'react-redux';
class cartItem extends Component {
  render() {
    return (
      <div className="Items">
        <div className = "ItemsChild">
        <h5>PRODUCT {this.props.pro.name}</h5>
        <div className="ItemsChild2">
        <p> PRICE {this.props.pro.price}</p>
        <div> Nos{this.props.quantity}</div></div></div>
       
      </div>
    );
  }
}


export default(cartItem)
