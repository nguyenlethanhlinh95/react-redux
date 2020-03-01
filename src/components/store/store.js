var redux = require('redux');
var oldState = {
    num: [1,2,3],
    status : true
  }
  var reducer1 = (state = oldState, action) => {
    switch (action.type) {
        // Change status
      case "CHANGE_STATUS":
        return {...state, status: ! state.status};
    
      default:
        break;
    }
    return state;
  };

  var store1 = redux.createStore(reducer1);
  console.log(store1.getState());
  // action la 1 ten
  var action = {
    type: "CHANGE_STATUS",  
  }
  // thuc thi
  store1.dispatch(action)
  console.log(store1.getState());

  export default store1;