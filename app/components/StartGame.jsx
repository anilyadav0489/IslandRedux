var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

class StartGame extends React.Component {
  constructor(props){
      super(props);
  }

  startGame (e) {
    e.preventDefault();
    this.props.dispatch(actions.stateChange('PLAYER_TO_SELECT'));
  }

  render(){
    return (
      <div>
        <form onSubmit={this.startGame.bind(this)}>
          <div>Enter islands area for each island above by clicking on it</div>
          <div className="center-button">
            <button className="button primary">Start The Game</button>
          </div>
        </form>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(StartGame);
