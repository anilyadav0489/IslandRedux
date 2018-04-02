import React from 'react'
var {connect} = require('react-redux');
import { Switch, Route} from 'react-router-dom';

import Nav from 'Nav'
import Main from 'Main'
import About from 'About'


class Application extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}


export default connect(
  (state) => {
    return state;
  }
)(Application);
