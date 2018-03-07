var React = require('react');
var {connect} = require('react-redux');
var islandPicker = require('islandPicker');
var actions = require('actions');

import IslandStore from 'IslandStore';
import IslandWallet from 'IslandWallet';
import Message from 'Message';

class Main extends React.Component {

  componentDidUpdate(prevProps, prevState){
    if(prevProps.storeState.gameState === 'PLAYER_TO_SELECT'){
      //call AI to pick best in the remaining islands
      this.pickTheBestIsland();
    }
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="header-text">Pick and Play</h3>
        </div>
        <div className="row">
          <div className="columns small-centered medium-10 large-12 ">
            <div className="top-bar mainBody">
              <div className="top-bar-left">
                <ul className="menu">
                  <li className="wallet-Component">
                    <IslandWallet key='leftWallet' header="Player A Bucket"/>
                  </li>
                  <li>
                    <div className="store-Component">
                      <IslandStore/>
                    </div>
                    <div className="message-Component">
                      <Message />
                    </div>
                  </li>
                  <li className="wallet-Component">
                    <IslandWallet key='rightWallet' header="Computer's Bucket"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }

  pickTheBestIsland() {
    var that = this;
    var {availableIslands, leftBoundary, rightBoundary} = this.props.storeState;
    islandPicker.getIsland(stringify(availableIslands)).then(function(returnedIndex) {
      var indexToConsider = returnedIndex === 0 ? leftBoundary : rightBoundary;
      that.props.dispatch(actions.selectIsland(indexToConsider));
    }, function (errorMessage){
      alert('Error occured: '+ errorMessage);
    });

    function stringify(islands){
      var str = '';
      islands.forEach(function(island){
        str = str + island.area + ",";
      });
      str = str.substring(0, str.length-1);
      return str;
    }

  }
};

export default connect(
  (state) => {
    return state;
  }
)(Main);
