import { createStore } from 'redux';

// state
var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}
// action
var action = { type: 'TOGGLE_STATUS'}
// xu ly action va state
var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS'){
        state.status = ! state.status;
        return state;
    }
    if (action.type === 'SORT'){
        state.sort = {
            by: action.sort.by,
            value: action.sort.value
        }
        return state;
    }
    return state;
}
const store = createStore(myReducer);
console.log(store.getState());
// goi dispatch de thuc thi
store.dispatch(action);
console.log(store.getState());


var sortAction = {
    type: 'SORT',
    sort: {
        by: 'title',
        value: -1
    }
}
store.dispatch(sortAction);
console.log(store.getState());

