var React = require('react');

var Search = React.createClass({

  componentDidMount: function(){
    this.initAutocomplete();
  },

  initAutocomplete: function() {

    var autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete-splash')),
        {types: ['geocode']});

    autocomplete.addListener('place_changed', this.setAddressState);
  },

  render: function(){
    return(
      <div className="splash-search autocomplete-field">
        <input type="text" id="autocomplete-splash" placeholder="Where to?"/>
      </div>
    );
  }

});

module.exports = Search;
