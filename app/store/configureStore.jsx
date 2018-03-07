var redux = require('redux');
var {createIslandsReducer} = require('reducers');

export var configure = () => {

  var reducer = redux.combineReducers({
    storeState: createIslandsReducer
  });


  var store = redux.createStore(reducer, {}, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
