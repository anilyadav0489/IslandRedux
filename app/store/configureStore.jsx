var redux = require('redux');
var {createIslandsReducer} = require('reducers');

export var configure = () => {

  var reducer = redux.combineReducers({
    storeState: createIslandsReducer
  });

  var initialState = {
    gameState: 'BEGIN',
    playerA: 0,
    computer: 0,
    leftBoundary: 0,
    rightBoundary: 0,
    islands: [],
    availableIslands: []
  };

  var store = redux.createStore(reducer, {}, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
