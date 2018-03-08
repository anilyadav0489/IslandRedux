var React = require('react');
var {connect} = require('react-redux');

class About extends React.Component{
  render(){
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is an intelligent game built on React. Here, user plays against computer to grab islands
          with the maximum area. The only rule is, selection at any point in the game could be made
          from either of available ends. One who grabs more area will win the game.
        </p>
        <p>
          To check rules of the game click the following link:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used
              Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(About);
