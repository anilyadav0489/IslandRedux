var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

class Island extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      id:1,
      area: 1,
      readOnly: props.readOnly,
      isAvailable: true,
      isPicked: props.isPicked
    };
  }


  setIslandArea () {
    var islandID = this.props.id;
    var area = this.refs.islandRef.value;
    this.props.dispatch(actions.setIslandArea(islandID, area));
  }

  componentDidUpdate (prevProps, prevState){
    var id = prevProps.id;
    var islands = prevProps.storeState.islands;
    if(islands[id-1].isPicked === true){
      this.refs.islandRef.className = "unavailable-island island-text";
    }
  }


  selectIsland () {
    var {gameState, leftBoundary, rightBoundary} = this.props.storeState;
    var id = this.props.id;
    var area = this.refs.islandRef.value;

    if((gameState === 'PLAYER_TO_SELECT' || gameState === 'COMPUTER_TO_SELECT' || gameState === 'GAME_OVER')
      && (this.state.isAvailable === true) && (id === leftBoundary || id === rightBoundary)){
      this.refs.islandRef.className = "unavailable-island island-text";
      this.state.isAvailable = false;
      this.props.dispatch(actions.selectIsland(id));
    }else if (gameState === 'ENTER_ISLANDS_AREA'){
      this.refs.islandRef.className = "square-island";
    }
  }

  updateStyle () {
    var {gameState} = this.props.storeState;
    if(gameState === 'ENTER_ISLANDS_AREA'){
      this.refs.islandRef.className = "square-island";
    }
  }

  updateStyleToNormal () {
    var {gameState} = this.props.storeState;
    if(gameState === 'ENTER_ISLANDS_AREA'){
      this.refs.islandRef.className = "island island-text";
    }
  }

  render() {
    var id = this.props.id;
    var area = this.props.area;

    return (
        <input type="text" ref="islandRef" placeholder="0" className="island island-text"
          readOnly={this.props.readOnly} onChange={this.setIslandArea.bind(this)}
          onClick={this.selectIsland.bind(this)} onBlur={this.updateStyleToNormal.bind(this)} onFocus={this.updateStyle.bind(this)}></input>
    );
  }
};

Island.defaultProps = {
  readOnly: false,
  isPicked: false
};
export default connect(
  (state) => {
    return state;
  }
)(Island);
