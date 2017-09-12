import React, {Component} from 'react';
import {connect} from 'react-redux'
import {filter} from '../actions'
class Filter extends Component {

  constructor() {
    super();
    this.test = this.test.bind(this);
    this.test2 = this.test2.bind(this);
  }

  test() {
    console.log('uuuu', this.refs.myInput.value)
  }

  test2(e) {
    this.refs.myInput.value = e.target.value;
  }

  render() {
    return (
      <div>
        <input type="number" min="0" max="100" ref = "myInput" onChange={this.props.buttonclick}/>
        <input type="number" min="0" max="100"onChange={this.props.buttonclick}/>
        <button onClick = {this.test}>click me</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return  {
    buttonclick:(ev)=>{
      let arg = {
        [ev.target.name]: ev.target.value
      }
      dispatch(filter(arg))
    }
  }
}




export default connect(null,mapDispatchToProps)(Filter);
