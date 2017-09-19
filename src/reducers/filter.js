export default function(state = {min:0,max:100000}, action) {
  if (action.type === 'FILTER') {
    //console.log("==>",action.payload)
    let newState = Object.assign({},state,action.payload)
//console.log(newState)
    return newState;
  }
  return state;
}
