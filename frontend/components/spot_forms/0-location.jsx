var React = require('react');
var ClientActions = require('../../actions/client_actions');
// var ReactRouter = require('react-router');
// var hashHistory = ReactRouter.hashHistory;
var CountryDropDown = require('./country_drop_down');
var Map = require('../map');


var LocationForm = React.createClass({
  // add saving? new table? or take away null constraints?
  getInitialState: function(){
    return({
        country: "",
        address: "",
        apt: "",
        city: "",
        state: "",
        zip: "",
        progress: 0
    });
  },

  getCountryFromChild: function (new_country) {
    this.setState({country: new_country});
  },

  handleChange: function(e){
    var newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  },

  render: function(){
    if (this.state.progress === 0){
      return(
        <div className="location-options">
          <h2>Where's your spot located?</h2>
          <label for="country">Country</label>
          <CountryDropDown id="country" sendValueToParent={this.getCountryFromChild}/>
            <form onChange={this.handleChange} className="position-form">

            <label for="address">Street Address</label>
            <input type="text" id="address" value={this.state.address} placeholder="e.g. 123 Main St."/>

            <label for="apt">Apt, Suite, Bldg.</label>
            <input type="text" id="apt" value={this.state.apt} placeholder="e.g. Apt #7"/>

            <label for="city">City</label>
            <input type="text" id="city" value={this.state.city} placeholder="e.g. New York"/>

            <label for="state">State</label>
            <input type="text" id="state" value={this.state.state} placeholder="e.g. NY"/>

            <label for="zip">ZIP Code</label>
            <input type="text" id="zip" value={this.state.zip} placeholder="e.g. 12491"/>

            </form>
        </div>
      );
    }
    else {
      return(
        <div className="map-container clearfix">
          <h2>Where's your spot located?</h2>
          <Map/>
          <h3>Drag pin to change location</h3>
        </div>
      );
    }
  }
});

module.exports = LocationForm;
