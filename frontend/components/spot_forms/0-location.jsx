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
      street_number: '',
      route: '',
      locality: '',
      administrative_area_level_1: '',
      country: '',
      postal_code: '',
      apt: ''
    });
  },

  componentDidMount: function(){
    this.initAutocomplete();
  },

  getCountryFromChild: function (new_country) {
    this.setState({country: new_country});
  },

  handleChange: function(e){
    var newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  },

    componentForm: {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    },

    initAutocomplete: function() {
      // Create the autocomplete object, restricting the search to geographical
      // location types.
      autocomplete = new google.maps.places.Autocomplete(
          /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
          {types: ['geocode']});

      // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      autocomplete.addListener('place_changed', this.setAddressState);
    },

    setAddressState: function (){
      var place = autocomplete.getPlace();
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (this.componentForm[addressType]) {
          var val = place.address_components[i][this.componentForm[addressType]];
          var newState = {};
          newState[addressType] = val;
          this.setState(newState);
        }
      }
    },
    //
    // function fillInAddress() {
    //   // Get the place details from the autocomplete object.
    //   var place = autocomplete.getPlace();
    //
    //   for (var component in componentForm) {
    //     document.getElementById(component).value = '';
    //     document.getElementById(component).disabled = false;
    //   }
    //
    //   // Get each component of the address from the place details
    //   // and fill the corresponding field on the form.
    //   for (var i = 0; i < place.address_components.length; i++) {
    //     var addressType = place.address_components[i].types[0];
    //     if (componentForm[addressType]) {
    //       var val = place.address_components[i][componentForm[addressType]];
    //       document.getElementById(addressType).value = val;
    //     }
    //   }
    // }


  render: function(){

    if (this.props.progress === 0){
      return(
        <div className="location-options">
          <h2>Where's your spot located?</h2>
          <input type="text" id="autocomplete" placeholder="Your full address"/>
        </div>
      );
    }
    else if (this.props.progress === 1){



      return(
        <div className="location-options">
          <h2>Where's your spot located?</h2>
          <label for="country">Country</label>
          <CountryDropDown id="country" sendValueToParent={this.getCountryFromChild} startingCountry = {this.state.country}/>
            <form onChange={this.handleChange} className="position-form">

            <label for="address">Street Address</label>
            <input type="text" id="address" value={this.state.street_number + " " + this.state.route} placeholder="e.g. 123 Main St."/>

            <label for="apt">Apt, Suite, Bldg.</label>
            <input type="text" id="apt" value={this.state.apt} placeholder="e.g. Apt #7"/>

            <label for="city">City</label>
            <input type="text" id="locality" value={this.state.locality} placeholder="e.g. New York"/>

            <label for="state">State</label>
            <input type="text" id="administrative_area_level_1" value={this.state.administrative_area_level_1} placeholder="e.g. NY"/>

            <label for="zip">ZIP Code</label>
            <input type="text" id="postal_code" value={this.state.postal_code} placeholder="e.g. 12491"/>

            </form>
        </div>
      );
    }
    else if (this.props.progress === 2) {
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
