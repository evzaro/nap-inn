var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;



NavBar = React.createClass({


  pushLogIn: function(){
    hashHistory.push('/login');
  },

  pushSignUp: function(){
    hashHistory.push('/signup');
  },

  render: function(){
    //if not signed in
    return(
      <nav className="nav">
        <div className="nav-logo">Logo</div>
        <ul classname="nav-links">
          <button onClick={this.pushLogIn}>Log In</button>
          <button onClick={this.pushSignUp}>Sign Up</button>
        </ul>
      </nav>
    );
  }

});


module.exports = NavBar;
