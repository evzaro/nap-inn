var React = require('react');
// var SessionActions = require('../actions/session_actions');
// var SessionStore = require('../stores/session_store');
var ClientActions = require('../../actions/client_actions');
// var ReactRouter = require('react-router');
// var hashHistory = ReactRouter.hashHistory;
var CountryDropDown = require('./country_drop_down');

var MasterSpotForm = React.createClass({
  // add saving? new table? or take away null constraints?
  getInitialState: function(){
    return({
      location: ""
    });
  },

  render: function(){

    return(
      <div className="location-options">
        <CountryDropDown/>
        <label for="address">Street Address</label>
        <input type="text" id="address" value="" placeholder="e.g. 123 Main St."/>
        <label for="apt">Apt, Suite, Bldg.</label>
        <input type="text" id="apt" value="" placeholder="e.g. Apt #7"/>
        <label for="city">City</label>
        <input type="text" id="city" value="" placeholder="e.g. New York"/>
        <label for="state">State</label>
        <input type="text" id="state" value="" placeholder="e.g. NY"/>
        <label for="zip">ZIP Code</label>
        <input type="text" id="zip" value="" placeholder="e.g. 12491"/>
      </div>
    );
  }



});

module.exports = MasterSpotForm;
