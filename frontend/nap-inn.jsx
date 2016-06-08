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
var MasterSpotForm = require('./components/master_spot_form');
var NapSpotIndex = require('./components/spot_index');
var App = require('./components/app');
var Splash = require('./components/splash');

//Authentication
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

//temp
var NapSpotStore = require('./stores/nap_spot_store');
var NapSpotApiUtil = require('./util/nap_spot_api_util');

// var App = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <NavBar/>
//           <div className="background">
//           </div>
//         {this.props.children}
//       </div>
//     );
//   }
// });


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
        <Route path="index" component={NapSpotIndex}/>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
