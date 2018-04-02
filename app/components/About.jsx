var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router-dom');

class About extends React.Component{
  constructor(props){
      super(props);
  }
  
  render(){
    return (
      <div className='about-page application-top-level'>
        <div className="row">
          <div  className="column small-centered medium-10 large-12">
            <h1 text-center page-title>About</h1>
          </div>
        </div>
        <div className="row">
          <div className="column small-centered medium-10 large-12">
              This is an intelligent game built on React. Here, user plays against computer to grab islands
              with the maximum area. The only rule is, selection at any point during the game play, could be made
              from either of available ends. One who grabs more area will win the game.
            <div className="margin">
              <ul>
                <li>
                  <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Resume Play</Link>
                </li>
                <li>
                  <a href="https://facebook.github.io/react">React JS </a>
                  - have been used to implement this game.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(About);
