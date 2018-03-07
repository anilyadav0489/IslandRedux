var React = require('react');
var {connect} = require('react-redux');

import Island from 'Island';

class IslandPool extends React.Component {

  render(){
    var that = this;
    var numberOfIslands = this.props.storeState.islands.length;
    var islands = this.props.storeState.islands;

    function renderPool () {
      if(numberOfIslands === 0){
          return (<div className="row">
                  <div className="columns small-centered small-12 medium-12 large-12">
                    <ul className="menu island-placement island-pool">
                      <li className="island-display">Islands will be displayed here</li>
                  </ul>
              </div>
            </div>);
      }else {
        return ( <div className="row">
                <div className="columns small-centered small-12 medium-12 large-12">
                  <ul className="menu island-placement island-pool">

                    {islands.map(function(island, index){
                      return (<li className="island-display" key={index}>
                                <Island key={index} id={island.id} area={island.area}
                                  mainState={that.props.mainState} readOnly={that.props.readOnly}
                                  isPicked={island.isPicked} onIslandSelection={that.handleIslandSelection}
                                  onSetIslandArea={that.handleSetIslandArea}></Island>
                              </li>);
                      })}
                </ul>
            </div>
          </div>);
      }
    }
    return (
      <div>
        {renderPool()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(IslandPool);
