import React, {Component} from 'react';

class cartItem extends Component {
  render() {
    return (
      <div className="Items">
        <div className="ItemsChild">
          <h5>{this.props.pro.name}</h5>
          <div className="ItemsChild2">
            <p> PRICE {this.props.pro.price}</p>
            <div> Nos{this.props.quantity}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default cartItem;
