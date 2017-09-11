import React, {Component} from 'react';
class Item extends Component {
  render() {
    return (
      <div>
        {/* <div>{this.props.pro.price}</div> */}
        <h3>{this.props.pro.productName}</h3>
        <p>{this.props.pro.price}</p>
        <p>{this.props.pro.quantity}</p>
        <button> add to cart</button>
      </div>
    );
  }
}
export default Item;
