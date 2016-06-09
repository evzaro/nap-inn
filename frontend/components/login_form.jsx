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
    console.log("mounting!");
  },

  componentWillUnmount: function() {
    // debugger
    this.storeListener.remove();
    window.clearInterval(this.interval);
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

  handleGuest: function (e){
    e.stopPropagation();
    this.email = ['g','u','e','s','t','@','g','u','e','s','t','.','c','o','m'];
    this.pass = ['p','a','s','s','w','o','r','d'];
    this.currentEmail = "";
    this.currentPass = "";

    this.interval = window.setInterval(this.animate, 100);
  },

  animate: function (){

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
      } else {
        this.handleSubmit();
      }
  },

  preventDefault: function (e) {
    e.preventDefault();
  },

  render: function (){

    return(
      <div>
      <div className={"login-signup-modal " + this.state.status} onClick={this.handleClick}>
        <div className="login-signup-div">
          <form className="login-form" onSubmit={this.preventDefault}>
            <button className="fb-btn"><a href="/auth/facebook">Log in with Facebook</a></button>
            <input type="email" value={this.state.user_email}
              id="user_email" onChange={this.onChangeUserField} placeholder="Email"/>

            <input type="password" value={this.state.password}
              id="password" onChange={this.onChangePassField} placeholder="Password" />
            <button className="login-signup-btn" onClick={this.handleSubmit}>Log In</button>
            <button className="login-signup-btn" onClick={this.handleGuest}>Guest</button>
          </form>
        </div>
      </div>
      {this.props.children}
    </div>
    );
  }
});


module.exports = LoginForm;
