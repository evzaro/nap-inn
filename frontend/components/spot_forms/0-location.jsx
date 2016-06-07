var React = require('react');
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
      apt: '',
      latlng: {}
    });
  },

  componentDidMount: function(){
    var auto = this.initAutocomplete();
  },

  updateMaster: function(){
    this.props.sendValueToMaster(this.state);
  },


  getCountryFromChild: function (new_country) {
    this.setState({country: new_country}, this.updateMaster);
  },

  handleChange: function(e){
    var newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState, this.updateMaster);
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

      autocomplete = new google.maps.places.Autocomplete(
          /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
          {types: ['geocode']});

      autocomplete.addListener('place_changed', this.setAddressState);
    },

    setAddressState: function (){
      var place = autocomplete.getPlace();
      this.setState({
        latlng: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
      });
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (this.componentForm[addressType]) {
          var val = place.address_components[i][this.componentForm[addressType]];
          var newState = {};
          newState[addressType] = val;
          this.setState(newState);
        }
      }
      this.forceUpdate(this.updateMaster);
    },

  render: function(){

    if (this.props.progress === 0){
      return(
        <div className="creation-options autocomplete-field">
          <h2>Where's your spot located?</h2>
          <input type="text" id="autocomplete" placeholder="Your full address"/>
        </div>
      );
    }
    else if (this.props.progress === 1){
      return(
        <div className="creation-options">
          <h2>Where's your spot located?</h2>
          <label for="country">Country</label>
          <CountryDropDown id="country" sendValueToParent={this.getCountryFromChild} startingCountry={this.state.country}/>
            <form className="position-form">

            <label for="address">Street Address</label>
            <input type="text" onChange={this.handleChange} id="address" value={this.state.street_number + " " + this.state.route} placeholder="e.g. 123 Main St."/>

            <label for="apt">Apt, Suite, Bldg.</label>
            <input type="text" onChange={this.handleChange} id="apt" value={this.state.apt} placeholder="e.g. Apt #7"/>

            <label for="city">City</label>
            <input type="text" onChange={this.handleChange} id="locality" value={this.state.locality} placeholder="e.g. New York"/>

            <label for="state">State</label>
            <input type="text" onChange={this.handleChange} id="administrative_area_level_1" value={this.state.administrative_area_level_1} placeholder="e.g. NY"/>

            <label for="zip">ZIP Code</label>
            <input type="text" onChange={this.handleChange} id="postal_code" value={this.state.postal_code} placeholder="e.g. 12491"/>

            </form>
        </div>
      );
    }
    else if (this.props.progress === 2) {
      return(
        <div className="map-container clearfix">
          <h2>Where's your spot located?</h2>
          <Map newPos={this.state.latlng}/>
          <h3>Drag pin to change location</h3>
        </div>
      );
    }
  }
});

module.exports = LocationForm;
