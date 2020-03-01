import editStatusReducer from '../../reducers/editStatusReducer';
import numReducer from '../../reducers/numReducer';

var redux = require('redux');

// noi hai ham reducer lai
const allReducers = redux.combineReducers({
    num: numReducer,
    status: editStatusReducer
});

var store1 = redux.createStore(allReducers);
export default store1;
