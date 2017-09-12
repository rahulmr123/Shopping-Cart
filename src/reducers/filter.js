// const filter = (state={},action)=>{
// switch(action.type){
//   case 'FILTER':{
//     var newState= state;
//     newState={from:action.payload.from,to:action.payload.to}
//     return newState;
//   }
// default:{
//   return state;
// }
// }


// }

export default function(state = { min: 0, max: 100000 }, action) {
  if( action.type === 'FILTER' ) {
    let newState = Object.assign({}, state, action.range);
  
    return newState;
  }
  return state;
}