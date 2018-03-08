var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');

class Nav extends React.Component{

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu ">
            <li className="menu-text">Pick The Best App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="author-text">
                created by Anil Yadav
              </li>
            </ul>
        </div>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Nav);
