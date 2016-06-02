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

  handleClick: function (e){
    if (e.target === e.currentTarget){
      // add modal transitions? make it always hidden?
      // if (this.state.status === "showing"){
      //   this.setState({
      //     status: "hidden"
      //   });
      // } else {
      //   this.setState({
      //     status: "showing"
      //   });
      // }
      hashHistory.push('/');
    }
  },

  render: function (){
    return(
      <div className="login-signup-modal" onClick={this.handleClick}>
        <div className="login-signup-div">
          <form className="signup-form">

            <input type="text" value={this.state.fname}
              id="fname" onChange={this.onChangeFname} placeholder="First Name" />

            <input type="text" value={this.state.lname}
              id="lname" onChange={this.onChangeLname} placeholder="Last Name"/>

            <input type="email" value={this.state.user_email}
              id="user_email" onChange={this.onChangeUserField} placeholder="Email"/>

            <input type="password" value={this.state.password}
              id="password" onChange={this.onChangePassField} placeholder="Password"/>


              <button onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = LoginForm;
