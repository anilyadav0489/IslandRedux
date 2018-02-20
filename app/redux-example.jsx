var redux = require("redux");

console.log("Redux loaded successfully");

var defaultState = {
  name: 'Anil'
}
var reducer = (state = defaultState, action) => {
  console.log('Action is: ', action);
  return state;
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

var currentState = store.getState();

var action = {
  type: 'CHANGE_NAME',
  name: 'Anil'
};

store.dispatch(action);
store.dispatch(action);

console.log(currentState);
