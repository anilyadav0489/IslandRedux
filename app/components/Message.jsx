var React = require('react');
var {connect} = require('react-redux');
import StartGame from 'StartGame';

class Message extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    var that = this;
    var {gameState, playerA, computer} = this.props.storeState;

    function displayMessage (){
      switch (gameState){
        case 'TOTAL_ISLANDS_TO_BE_DECIDED':
          return <h5>Select number of Islands above to start the game...</h5>;
        case 'ENTER_ISLANDS_AREA':
          return <StartGame/>;
        case 'PLAYER_TO_SELECT':
          return <h3>Your chance to select</h3>;
        case 'COMPUTER_TO_SELECT':
          return <h3>Computer is selecting...</h3>;
        case 'GAME_OVER':
          return playerA > computer? <h3>Player A won</h3> : (playerA === computer? <h3> Game Drawn </h3> : <h3> Computer won </h3>);
        default:
          return <h5>Select number of Islands above to start the game...</h5>;
      }
    };
    return (
      <div className="message-Component">
        {displayMessage()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Message);
