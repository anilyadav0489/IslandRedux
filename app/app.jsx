var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';
var {Provider} = require('react-redux');

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);
