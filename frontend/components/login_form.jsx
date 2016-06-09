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
      password: "",
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

  handleSubmit: function (e){
    e.preventDefault();

		var formData = {
			user_email: this.state.user_email,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData);
    } //add listener to session store for success?
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

  handleGuest: function (){
    this.email = ['g','u','e','s','t','@','g','u','e','s','t','.','c','o','m'];
    this.pass = ['p','a','s','s','w','o','r','d'];
    this.currentEmail = "";
    this.currentPass = "";
      console.log("first part");
    window.setInterval(function(){
      console.log("ticking");
      if (this.email.length > 0){
        this.currentEmail = this.currentEmail + this.email.shift();

        this.setState({
          user_email: this.currentEmail
        });
      } else if (this.pass.length > 0) {
        this.currentPass = this.currentPass + this.pass.shift();

        this.setState({
          password: this.currentPass
        });
      }
    }.bind(this), 100);
  },

  render: function (){
    return(
      <div>
      <div className={"login-signup-modal " + this.state.status} onClick={this.handleClick}>
        <div className="login-signup-div">
          <form className="login-form">
            <input type="email" value={this.state.user_email}
              id="user_email" onChange={this.onChangeUserField} placeholder="Email"/>

            <input type="password" value={this.state.password}
              id="password" onChange={this.onChangePassField} placeholder="Password" />
            <button onClick={this.handleSubmit}>Log In</button>
            <button onClick={this.handleGuest}>Guest</button>
            <a href="/auth/facebook">FB</a>
          </form>
        </div>
      </div>
      {this.props.children}
    </div>
    );
  }
});


module.exports = LoginForm;
