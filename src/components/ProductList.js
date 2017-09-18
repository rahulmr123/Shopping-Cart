import React, {Component} from 'react';
import Item from './Item';
import {fetchProducts} from '../actions'
import {connect} from 'react-redux';
import axios from'axios'
class Products extends Component {


componentWillMount(){
  this.props.dispatch1()
}




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

const mapDispatchToProps =(dispatch,ownprops)=>{
  return{
    dispatch1:()=>{
      const url = "http://localhost:8080/get_products";
      axios.get(url).then((response)=>{
        console.log("==>",response)
        dispatch(fetchProducts(response.data.result));
      })
    }
  }
}



const mapStateToProps = (state, Props) => {
  return {
    product: state.Product,
    filter: state.Filter,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);
