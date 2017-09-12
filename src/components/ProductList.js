import React, {Component} from 'react';
import Item from './Item';

import {connect} from 'react-redux';
class Products extends Component {
  componentWillMount() {
    {
     // this.props.dispatch(load);
    }
  }
  render() {
    //var itemsArray = this.props.product.map((val) => (<Item pro = {val} />))

    return <div className="List">{this.props.product.map(val => <Item pro={val} quantity={val.quantity}/>)}</div>;
  }
}

const mapStateToProps = (state, Props) => {
  return {
    product: state.Product,
  };
};

export default connect(mapStateToProps)(Products);
