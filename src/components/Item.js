import React, {Component} from 'react';
import {addtocart} from '../actions';
import {decreaseQuantity} from '../actions';
import {calculatetotal} from '../actions';
import {connect} from 'react-redux';
import '../App.css';
import {Button, Icon} from 'react-materialize';

class Item extends Component {
  render() {
    return (
      <div className="Items">
        <div className="ItemsChild">
          <h5>{this.props.pro.productName}</h5>
          <div className="ItemsChild2">
            <p>PRICE {this.props.pro.price}</p>
            <p>AVAILABLE {this.props.pro.quantity}</p>
          </div>
        </div>
        <Button waves="light" onClick={this.props.buttonClick}>
          add to cart
        </Button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buttonClick: () => {
      if (ownProps.pro.quantity > 0) {
        dispatch(addtocart(ownProps.pro));
        dispatch(decreaseQuantity(ownProps.pro));
        dispatch(calculatetotal(ownProps.pro));
      } else {
      }
    },
  };
};
function mapStateToProps(state) {
  return {
    product: state.Product,
    filter: state.Filter,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
