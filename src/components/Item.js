import React, {Component} from 'react';
import {addtocart} from '../actions';
import {decreaseQuantity} from '../actions';
import {calculatetotal} from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';
import '../App.css';
//import {sent} from '../actions'
import {Button} from 'react-materialize';
var sent = item => {
  //console.log('*********');
  axios
    .post('http://localhost:8000/add_to_cart', {item: item})
    .then(
      response => {
        console.log(response);
      },
      function(err) {
        console.log(err);
      }
    );
};

class Item extends Component {
  render() {
    return (
      <div className="Items">
        <div className="ItemsChild">
          <h5>{this.props.pro.name}</h5>
          <div className="ItemsChild2">
            <p>PRICE {this.props.pro.price}</p>
            <p>AVAILABLE {this.props.quantity}</p>
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
        sent(ownProps.pro);
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
