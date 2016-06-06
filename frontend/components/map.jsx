var React = require('react');
var NapSpotStore = require('../stores/nap_spot_store');
var ClientActions = require('../actions/client_actions');


var Map = React.createClass({

  componentDidMount: function(){
    var mapDOMNode = this.refs.map;

    var lat = this.props.newPos === undefined ? 40.7128 : this.props.newPos.lat;
    var lng = this.props.newPos === undefined ? -74.0059 : this.props.newPos.lng;

    var mapOptions = {
      center: {lat: lat, lng: lng},
      zoom: 15
    };

    var map = new google.maps.Map(mapDOMNode, mapOptions);

    var marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map,
    draggable: true,
    title: "My Nap Spot"
    });
    // NapSpotStore.addListener(this._setMarkers);

    // this.map.addListener('idle', this._updatePosParams);

    // this.markers = {};
  },

  // _updatePosParams: function(){
  //   var bounds = {
  //     'northEast': {
  //       'lat': this.map.getBounds().getNorthEast().lat(),
  //       'lng': this.map.getBounds().getNorthEast().lng()
  //     },
  //     'southWest': {
  //       'lat': this.map.getBounds().getSouthWest().lat(),
  //       'lng': this.map.getBounds().getSouthWest().lng()
  //     }
  //   };
  //   ClientActions.fetchBenches(bounds);
  // },

  // _setMarkers: function(){
  //   var map = this.map;
  //   var benches = BenchStore.all();
  //   var markers = this.markers;
  //
  //


  //   Object.keys(benches).forEach(function(benchID){
  //     if (markers[benchID] === undefined){
  //       markers[benchID] = new google.maps.Marker({
  //         position: {lat: benches[benchID].lat, lng: benches[benchID].lng},
  //         map: map,
  //         animation: google.maps.Animation.DROP,
  //         icon: icon,
  //         title: benches[benchID].description
  //       });
  //     }
  //   });
  //   this._markerCleanUp(benches, markers);
  // },
  //
  // _markerCleanUp: function(benches, markers){
  //   Object.keys(markers).forEach(function(benchID){
  //     if (!(Object.keys(benches).includes(benchID))){
  //       markers[benchID].setMap(null);
  //       delete markers[benchID];
  //     }
  //   });
  // },


  render: function (){
    return(
      <div className="map" ref="map">

      </div>
    );
  }


});

module.exports = Map;
