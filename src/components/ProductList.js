import React, {Component} from 'react';
import Item from './Item';

import {connect} from 'react-redux';
class Products extends Component {
  render() {
    return (
      <div className="List">
        {this.props.product.map((val) => {
          

          if (
            val.price > this.props.filter.min &&
            val.price <= this.props.filter.max
          ) {
            
            return <Item pro={val} quantity={val.quantity} />
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, Props) => {
  return {
    product: state.Product,
    filter: state.Filter,
  };
};

export default connect(mapStateToProps)(Products);
