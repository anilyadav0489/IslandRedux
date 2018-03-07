var React = require('react');
var {connect} = require('react-redux');

class IslandWallet extends React.Component {
  render() {
    var header = this.props.header;
    var islandAcquired = header === 'Player A Bucket'? this.props.storeState.playerA: this.props.storeState.computer;
    return (
      <div>
        <h5>{header}</h5>
        <h1 className="area-aquired-text">{islandAcquired}</h1>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(IslandWallet);
