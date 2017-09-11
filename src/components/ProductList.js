import React, {Component} from 'react';
import Item from './Item'

import {connect} from 'react-redux'
class Products extends Component {
  render() {

   //var itemsArray = this.props.product.map((val) => (<Item pro = {val} />))

    return (
      <div> 
        {
          this.props.product.map((val) => (<Item pro = {val} />))
        }

      </div>
    )
  }
}


const mapStateToProps = (state,Props) => {

return{
    product:state.Product
}


}


export default connect(mapStateToProps)(Products);

