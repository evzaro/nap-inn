var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var LocationForm = require('./spot_forms/0-location');

var MasterSpotForm = React.createClass({
  // add saving? new table? or take away null constraints?
  getInitialState: function(){
    return({

    progress: 0,
    title: "",
    description: "",
    category: "",
    location: "",
    price: "",
    image_urls: ""
    });
  },

  render: function(){

    return(
      <div className="form-content">
        <nav className="form-navbar">
          <ul>
            <li>but1</li>
            <li>but2</li>
            <li>but3</li>
          </ul>
        </nav>
        <div className = "centered-content clearfix">
          <div className="mini-form-window clearfix">
            <LocationForm/>
            <div className="form-nav-bottom"></div>
          </div>
            <div className="helper-info">Helper Stuff</div>
        </div>
      </div>
    );
  }



});

module.exports = MasterSpotForm;
