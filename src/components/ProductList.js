import React, {Component} from 'react';
import Item from './Item';

import {connect} from 'react-redux';
class Products extends Component {
  render() {
    return (
      <div className="List">
        {this.props.product.map(val => {
          console.log('val', val);
          console.log('min', this.props.filter.min);
          console.log('max', this.props.filter.max);

          if (
            val.price > this.props.filter.min &&
            val.price <= this.props.filter.max
          ) {
            console.log('match');
            return <Item pro={val} quantity={val.quantity} />;
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
