var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var LoginForm = require('./components/login_form');
var SignupForm = require('./components/signup_form');
var NavBar = require('./components/navbar');
var MasterSpotForm = require('./components/master_spot_form');
var NapSpotIndex = require('./components/spot_index');
var NapSpotDetail = require('./components/spot_detail');
var MyNapSpots = require('./components/my_spots');
var MyBookings = require('./components/my_bookings');
var App = require('./components/app');
var Splash = require('./components/splash');

var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

var NapSpotStore = require('./stores/nap_spot_store');
var NapSpotApiUtil = require('./util/nap_spot_api_util');

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash}/>
        <Route path="login" component={LoginForm}>
          <IndexRoute component={Splash}/>
        </Route>
        <Route path="signup" component={SignupForm}>
          <IndexRoute component={Splash}/>
        </Route>
        <Route path="new" component={MasterSpotForm}/>
        <Route path="index/:latlng" component={NapSpotIndex}/>
        <Route path="detail/:id" component={NapSpotDetail}/>
        <Route path="mynapspots" component={MyNapSpots}/>
        <Route path="mybookings" component={MyBookings}/>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
