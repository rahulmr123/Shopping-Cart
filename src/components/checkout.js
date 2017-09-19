import React, {Component} from 'react';

import {connect} from 'react-redux';

class Checkout extends Component {
  render() {
    return (
      <div>
        {/* <div>{this.props.pro.price}</div> */}
        <p>YOU HAVE TO PAY {this.props.Total}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Total: state.Total,
  };
}

export default connect(mapStateToProps)(Checkout);
