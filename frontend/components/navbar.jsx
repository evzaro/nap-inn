var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var PropTypes = React.PropTypes;
var hashHistory = ReactRouter.hashHistory;
var SessionStore = require('../stores/session_store');
var RouteStore = require('../stores/route_store');
var RouteActions = require('../actions/route_actions');
var SessionApiUtil = require('../util/session_api_util');

var NavBar = React.createClass({
  getInitialState: function (){
    return({
      currentUser: SessionStore.currentUser(),
      status: "splash"
    });
  },

  componentDidMount: function(){
    this.loginListener = SessionStore.addListener(this._onChange);
    this.routeListener = RouteStore.addListener(this._handleNav);
    SessionApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.loginListener.remove();
  },

  _handleNav: function(){
    var route = RouteStore.route();
    if (route === '/'){
      this.setState({
        status: "splash"
      });
    } else if (route === "detail" || route === "profile") {
      this.setState({
        status: "static"
      });
    } else {
      this.setState({
        status: "fixed"
      });
    }
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

  pushHost: function (){
    RouteActions.changeRoute('/new');
    hashHistory.push('/new');
  },

  pushHome: function (){
    RouteActions.changeRoute('/');
    hashHistory.push('/');
  },

  _handleLogout: function (){
    SessionApiUtil.logout();
    hashHistory.push('/');
  },

  render: function (){
    var logo;
    if (this.state.status === "splash"){
      logo = <img src={JSON.parse(
        document.getElementById('content').dataset.images).wlogo}/>;
    } else {
      logo = <img src={JSON.parse(
        document.getElementById('content').dataset.images).blogo}/>;
    }

    if(SessionStore.isUserLoggedIn()){
      return(
        <nav className={"nav " + this.state.status}>
          <div className="nav-logo" onClick={this.pushHome}>
            {logo}
          </div>
          <ul classname="nav-links">
            <li className="profile-dropdown-parent">
              <button className="profile-button">{this.state.currentUser.fname}</button>
              <ul className="profile-dropdown">
                <li>Profile</li>
                <li>Your Naps</li>
                <li onClick={this._handleLogout}>Log Out</li>
              </ul>
            </li>
            <button onClick={this.pushHost}>Host</button>
            <button>Help</button>
          </ul>
        </nav>
      );
    } else {
      return(
        <nav className={"nav " + this.state.status}>
          <div className="nav-logo" onClick={this.pushHome}>
            {logo}
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
