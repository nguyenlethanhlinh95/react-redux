import React, { Component } from 'react';

export default class App extends Component {
    render() {
      var oldState = {
        num: [1,2,3],
        status : true
      }
      var redux = require('redux');
      var reducer1 = (state = oldState, action) => {
        switch (action.type) {
          case "ADD_NEW_ITEM":
            return {...state, num: [...state.num, action.newItem]}
            break;
          case "DELETE_ITEM":
          return {...state, num: state.num.filter((value, index) => index != action.index ) }
          break;
        
          default:
            break;
        }
        return state;
      };

      var store1 = redux.createStore(reducer1);

      // subcrible
      store1.subscribe(() => {
        console.log(store1.getState());
      });
      
      var action_addnum = {
        type: "ADD_NEW_ITEM",
        newItem: 6
      }
      // thuc thi
      store1.dispatch(action_addnum)

      var action_deletenum = {
        type: "DELETE_ITEM",
        index: 0
      }
      store1.dispatch(action_deletenum)
    return (
      <div>
        hello
      </div>
    )
  }
}
