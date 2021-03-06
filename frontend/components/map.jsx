var React = require('react');
var NapSpotStore = require('../stores/nap_spot_store');
var ClientActions = require('../actions/client_actions');
var RouteStore = require('../stores/route_store');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var Map = React.createClass({

  componentDidMount: function(){

    var mapDOMNode = this.refs.map;
    var mapOptions;
    var lat;
    var lng;

    if (this.props.maptype && this.props.maptype === "index"){
      lat = this.props.lat;
      lng = this.props.lng;
    } else {
      lat = (this.props.lat === "") ? 40.7128 : this.props.lat;
      lng = (this.props.lng === "") ? -74.0059 : this.props.lng;
    }

    mapOptions = {
      center: {lat: lat, lng: lng},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    // if (RouteStore.route() === "/index"){
      // this.storeListener = NapSpotStore.addListener(this._setMarkers);
      // this.map.addListener('idle', this._updatePosParams);
      // this.markers = {};
    // } else {
        // this.mark = new google.maps.Marker({
        // position: {lat: lat, lng: lng},
        // map: this.map,
        // animation: google.maps.Animation.DROP,
        // title: "My Spot!"
      // });
    // }

    if (this.props.maptype && this.props.maptype === "index"){
        this.storeListener = NapSpotStore.addListener(this._setMarkers);
        this.map.addListener('idle', this._updatePosParams);
        this.markers = {};
    } else {
        this.mark = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: this.map,
        animation: google.maps.Animation.DROP,
        title: "My Spot!",
        draggable:true
      });
    }
  },

  componentWillUnmount: function() {
    if (this.storeListener){
      this.storeListener.remove();
    }
    if (this.mark){
       this.mark.setMap(null);
    }
  },

  _updatePosParams: function(){
    var bounds = {
      'northEast': {
        'lat': this.map.getBounds().getNorthEast().lat(),
        'lng': this.map.getBounds().getNorthEast().lng()
      },
      'southWest': {
        'lat': this.map.getBounds().getSouthWest().lat(),
        'lng': this.map.getBounds().getSouthWest().lng()
      }
    };
    ClientActions.fetchNapSpots(bounds);
  },


  _setMarkers: function(){
    var map = this.map;
    var markers = this.markers;
    var nap_spots = NapSpotStore.all();

    nap_spots.forEach(function(spot){
      if (markers[spot.id] === undefined){
        markers[spot.id] = new google.maps.Marker({
          position: {lat: spot.lat, lng: spot.lng},
          map: map,
          animation: google.maps.Animation.DROP,
          title: spot.price
        });
        markers[spot.id].addListener('click', function() {
            hashHistory.push({pathname: 'detail/' + spot.id});
          });
      }
    });
  },

  render: function (){

    return(
      <div className="map" ref="map">

      </div>
    );
  }


});

module.exports = Map;
