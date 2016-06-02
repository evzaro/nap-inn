//React
var React = require('react');
var ReactDOM = require('react-dom');

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Components
var LoginForm = require('./components/login_form');
var SignupForm = require('./components/signup_form');
var NavBar = require('./components/navbar');

//Authentication
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

//temp

var App = React.createClass({
  render: function(){
    return(
      <div>
        <NavBar/>
          <div className="background"><img src={JSON.parse(
              document.getElementById('content').dataset.images).background1}/>
          </div>
        {this.props.children}
      </div>
    );
  }
});


var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignupForm}/>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
