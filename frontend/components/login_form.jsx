var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Link = require('react-router').Link;

var LoginForm = React.createClass({
  getInitialState: function () {
    return {
      user_email: "",
      password: ""
    };
  },

  onChangeUserField: function (e){
    this.setState({
      user_email: e.target.value
    });
  },

  handleInput: function (e){

    if (this.state.user_email === "") {
      this.setState({
        user_email: String.fromCharCode(e.keyCode)
      });
    }
  },

  onChangePassField: function (e){
    this.setState({
      password: e.target.value
    });
  },

  handleSubmit: function (e){
    e.preventDefault();

		var formData = {
			user_email: this.state.user_email,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData);
    }
  },

  render: function (){

    var emailVal;
    var emailType;
      if (this.state.user_email === ""){
        emailVal = "Email";
        emailType = "text";
      } else {
        emailVal = this.state.user_email;
        emailType = "email";
      }

    return(
      <div className="login-signup-modal">
        <div className="login-signup-div">
          <form className="login-form">
            <input type={emailType} value={emailVal}
              id="user_email" onChange={this.onChangeUserField} onKeyPress={this.handleInput}/>

            <input type="text" value={this.state.password}
              id="password" onChange={this.onChangePassField} />
            <button onClick={this.handleSubmit}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
});
//https://static.pexels.com/photos/62640/pexels-photo-62640.jpeg
//https://www.pexels.com/photo/women-resting-laying-down-27335/

module.exports = LoginForm;
