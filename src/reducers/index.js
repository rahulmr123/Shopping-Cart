import {combineReducers} from 'redux';
import Product from './products';
import Add from './AddItem';
import Total from './total'
import Filter from './filter'


const Shopping = combineReducers({
  Product,
  Add:Add,
  Total:Total,
  Filter:Filter
  
});
export default Shopping;
