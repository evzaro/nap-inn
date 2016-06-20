var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var PropTypes = React.PropTypes;
var RouteActions = require('../actions/route_actions');
var hashHistory = ReactRouter.hashHistory;

var Search = React.createClass({
  getInitialState: function(){
    return({
      place: ""
    });
  },

  componentDidMount: function(){
    this.initAutocomplete();
  },

  initAutocomplete: function() {
    autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete-splash')),
      {types: ['geocode']});
    autocomplete.addListener('place_changed', this.updateSearch);
  },

  updateSearch: function (){
    var place = autocomplete.getPlace();
    this.setState(
      {place: place}
    );
  },

  handleSubmit: function(){
    hashHistory.push({pathname:'index/' + this.state.place.geometry.location.lat() + "&" + this.state.place.geometry.location.lng()});

  },

  render: function(){
    return(
      <div className="splash-search autocomplete-field">
        <div className="search-wrapper">
        <input type="text" id="autocomplete-splash" placeholder="Where to?"/>
        <button onClick={this.handleSubmit}>Search</button>
        </div>
      </div>
    );
  }

});

module.exports = Search;
