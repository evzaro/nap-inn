var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var PropTypes = React.PropTypes;
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
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete-splash')),
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
    hashHistory.push({pathname:'index', state: this.state.place});

  },

  render: function(){
    return(
      <div className="splash-search autocomplete-field">
        <input type="text" id="autocomplete-splash" placeholder="Where to?"/>
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }

});

module.exports = Search;
