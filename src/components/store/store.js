import editStatusReducer from '../../reducers/editStatusReducer';
import numReducer from '../../reducers/numReducer';

var redux = require('redux');

// noi hai ham reducer lai
const allReducers = redux.combineReducers({
    num: numReducer,
    status: editStatusReducer
});

var store1 = redux.createStore(allReducers);

store1.subscribe(() => {
    console.log(store1.getState());
  });

export default store1;
