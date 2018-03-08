var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {connect} = require('react-redux');
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Main from 'Main';
import About from 'About';

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
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
