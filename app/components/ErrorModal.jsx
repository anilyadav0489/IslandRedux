var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

class ErrorModal extends React.Component{

  componentDidMount () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  componentWillUnmount(e){
    debugger;
      this.props.dispatch(actions.startTheGame());

  }

  render () {
    var {title, message} = this.props;

    return (
      <div id="error-modal" className="reveal large text-center shadow-bottom" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow expanded" data-close="" >
            Okay
          </button>
        </p>
      </div>
    );
  }
};

ErrorModal.defaultProps = {
  title: 'Error'
};

export default connect(
  (state) => {
    return state;
  }
)(ErrorModal);
