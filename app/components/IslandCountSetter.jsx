var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

class IslandCountSetter extends React.Component {

  constructor(props){
      super(props);
  }

  selectTotalIslands (islandCount){
    console.log('clicked on div '+ islandCount);
    var {dispatch} = this.props;
    if(this.props.storeState.gameState === 'TOTAL_ISLANDS_TO_BE_DECIDED'){
      dispatch(actions.createIslands(islandCount));
    }
  }

  render () {

    return (
      <div>
        <div className="row">
          <div className="columns small-4 medium-4 large-4">
            <div>
              <span className="island-text">
                <h6 className="start-with-text">Start With ? Islands</h6>
              </span>
            </div>
          </div>
          <div className="columns small-2 medium-2 large-2">
            <div className="small-island" onClick={this.selectTotalIslands.bind(this, 2)}>
              <span className="small-island-text">
                2
              </span>
            </div>
          </div>
          <div className="columns small-2 medium-2 large-2">
            <div className="small-island" onClick={this.selectTotalIslands.bind(this, 4)}>
              <span className="small-island-text">
                4
              </span>
            </div>
          </div>
          <div className="columns small-2 medium-2 large-2">
            <div className="small-island" onClick={this.selectTotalIslands.bind(this, 6)}>
              <span className="small-island-text">
                6
              </span>
            </div>
          </div>
          <div className="columns small-2 medium-2 large-2">
            <div className="small-island" onClick={this.selectTotalIslands.bind(this, 8)}>
              <span className="small-island-text">
                8
              </span>
            </div>
          </div>
        </div>


      </div>

    );
  }
};

IslandCountSetter.defaultProps = {
  totalIslandsCount: 0
}

export default connect(
  (state) => {
    return state;
  }
)(IslandCountSetter);
