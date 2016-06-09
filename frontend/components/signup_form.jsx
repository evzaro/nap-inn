var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var UserApiUtil = require('../util/user_api_util');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

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
			password: this.state.password,
      fname: this.state.fname,
      lname: this.state.lname
		};

    if (this.props.location.pathname === "/signup") {
      UserApiUtil.signup(formData);
    }
  },

  componentDidMount: function (){
    this.storeListener = SessionStore.addListener(this._handleSuccess);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  _handleSuccess: function (){
    if (SessionStore.isUserLoggedIn){
      hashHistory.push('/');
    }
  },

  handleClick: function (e){
    if (e.target === e.currentTarget){
      hashHistory.push('/');
    }
  },

  preventDefault: function (e) {
    e.preventDefault();
  },

  render: function (){
    return(
      <div>
      <div className="login-signup-modal" onClick={this.handleClick}>
        <div className="login-signup-div">
          <form className="signup-form" onSubmit={this.preventDefault}>
            <button className="fb-btn"><a href="/auth/facebook">Sign up with Facebook</a></button>

            <input type="text" value={this.state.fname}
              id="fname" onChange={this.onChangeFname} placeholder="First Name" />

            <input type="text" value={this.state.lname}
              id="lname" onChange={this.onChangeLname} placeholder="Last Name"/>

            <input type="email" value={this.state.user_email}
              id="user_email" onChange={this.onChangeUserField} placeholder="Email"/>

            <input type="password" value={this.state.password}
              id="password" onChange={this.onChangePassField} placeholder="Password"/>


            <button className="login-signup-btn" onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
      {this.props.children}
      </div>
    );
  }

});

module.exports = LoginForm;
