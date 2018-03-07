var React = require('react');
var {connect} = require('react-redux');

import IslandCountSetter from 'IslandCountSetter';
import IslandPool from 'IslandPool';

class IslandStore extends React.Component {
  render(){
    return (
      <div>
        <IslandCountSetter/>
          <IslandPool/>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(IslandStore);
