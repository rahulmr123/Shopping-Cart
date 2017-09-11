import {combineReducers} from 'redux'
import Product from './products'
import Add from './AddItem'

const Shopping = combineReducers({
   Product,
   Add
})
export default Shopping