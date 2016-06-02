var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var SessionStore = require('../stores/session_store');
var SessionApiUtil = require('../util/session_api_util');

NavBar = React.createClass({
  getInitialState: function (){
    return({
      currentUser: SessionStore.currentUser()
    });
  },

  componentDidMount: function(){
    var loginListener = SessionStore.addListener(this._onChange);
    SessionApiUtil.fetchCurrentUser();
  },

  _onChange: function(){
    this.setState({
      currentUser: SessionStore.currentUser()
    });
  },

  pushLogIn: function (){
    hashHistory.push('/login');
  },

  pushSignUp: function (){
    hashHistory.push('/signup');
  },

  _handleLogout: function (){
    SessionApiUtil.logout();
    hashHistory.push('/');
  },

  render: function (){
    if(SessionStore.isUserLoggedIn()){
      return(
        <nav className="nav">
          <div className="nav-logo"><img src={JSON.parse(
              document.getElementById('content').dataset.images).logo}/>
          </div>
          <ul classname="nav-links">
            <li className="profile-dropdown-parent">
              <button className="profile-button">Profile</button>
              <ul className="profile-dropdown">
                <li>Name</li>
                <li>Your Naps</li>
                <li onClick={this._handleLogout}>Log Out</li>
              </ul>
            </li>
            <button>Host</button>
            <button>Help</button>
          </ul>
        </nav>
      );
    } else {
      return(
        <nav className="nav">
          <div className="nav-logo"><img src={JSON.parse(
            document.getElementById('content').dataset.images).logo}/>
          </div>

          <ul classname="nav-links">
            <button onClick={this.pushLogIn}>Log In</button>
            <button onClick={this.pushSignUp}>Sign Up</button>
            <button>Help</button>
          </ul>
        </nav>
      );
    }
  }
});


module.exports = NavBar;
