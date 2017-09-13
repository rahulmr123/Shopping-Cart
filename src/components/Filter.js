import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filter} from '../actions';
class Filter extends Component {
  constructor() {
    super();
    this.test = this.test.bind(this);
    this.test2 = this.test2.bind(this);
  }

  test() {
    console.log('uuuu', this.refs.myInput.value);
  }

  test2(e) {
    this.refs.myInput.value = e.target.value;
  }

  render() {
    return (
      <div className="inputContainer">
        <input
          className="input"
          placeholder="filter from"
          name="min"
          type="number"
          min="0"
          max="100"
          ref="myInput"
          onChange={this.props.buttonclick}
        />
        <input
          className="input"
          name="max"
          placeholder="filter to"
          type="number"
          min="0"
          max="100"
          onChange={this.props.buttonclick}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
        buttonclick: ev => {
          let value = {}
      if(ev.target.value!=''){
     value = {
        [ev.target.name]: parseInt(ev.target.value),
      };}
      else if(ev.target.value==''){
        if(ev.target.name == 'max'){
           value = {
            [ev.target.name]: 100000,
          };
        }
        else{
     value = {
            [ev.target.name]: 0,
          }
        }
      }


      dispatch(filter(value));
    },
  };
}

export default connect(null, mapDispatchToProps)(Filter);
