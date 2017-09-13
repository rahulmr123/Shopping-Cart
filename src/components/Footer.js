import React, {Component} from 'react';
import {checkout} from '../actions';
import {connect} from 'react-redux';
import {Button} from 'react-materialize';
class Footer extends Component {
  render() {
    return (
      <div>
        {/* <div>{this.props.pro.price}</div> */}
        <p>TOTAL {this.props.Total}</p>
        <Button onClick={this.props.buttonClick}>Checkout</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buttonClick: () => {
      dispatch(checkout());
    },
  };
};
function mapStateToProps(state) {
  return {
    Total: state.Total,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
