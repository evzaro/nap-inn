var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var UserApiUtil = require('../util/user_api_util');

var LoginForm = React.createClass({
  getInitialState: function () {
    return {
      fname: "",
      lname: "",
      user_email: "",
      password: ""
    };
  },

  onChangeUserField: function (e){
    this.setState({
      user_email: e.target.value
    });
  },

  onChangePassField: function (e){
    this.setState({
      password: e.target.value
    });
  },

  onChangeFname: function (e){
    this.setState({
      fname: e.target.value
    });
  },

  onChangeLname: function (e){
    this.setState({
      lname: e.target.value
    });
  },
  handleSubmit: function (e){
    e.preventDefault();

		var formData = {
			user_email: this.state.user_email,
			password: this.state.password
		};

    if (this.props.location.pathname === "/signup") {
      UserApiUtil.signup(formData);
    }
  },

  render: function (){
    return(
      <div className="login-signup-modal">
        <div className="login-signup-div">
          <form className="signup-form">

            <input type="text" value={this.state.fname}
              id="fname" onChange={this.onChangeFname} />

            <input type="text" value={this.state.lname}
              id="lname" onChange={this.onChangeLname} />

            <input type="email" value={this.state.user_email}
              id="user_email" onChange={this.onChangeUserField} />

            <input type="password" value={this.state.password}
              id="password" onChange={this.onChangePassField} />


              <button onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = LoginForm;
